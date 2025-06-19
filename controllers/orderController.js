const {
  HttpError,
  HttpSuccess,
  CtrlWrapper,
  sendMessageOrder,
} = require("../helpers");
const { prismadb } = require("../prismaClient");

//Create order
const createOrder = async (req, res) => {
  const body = req.body;
  const {
    firstName,
    lastName,
    phone,
    address,
    email,
    orderStatus,
    messagngerType,
    message,
    messenger,
    isPaid,
    products,
  } = body;
  let totalPrice = 0;

  const findUser = await prismadb.user.findFirst({
    where: {
      email,
    },
  });

  const lastOrder = await prismadb.order.findFirst({
    orderBy: {
      orderNumber: "desc",
    },
  });

  const newOrderNumber = lastOrder ? parseInt(lastOrder?.orderNumber) + 1 : 1;

  let user = findUser;

  if (!user) {
    user = await prismadb.user.create({
      data: {
        firstName,
        lastName,
        address,
        phoneNumber: phone,
        email,
      },
    });
  }

  const newOrder = await prismadb.order.create({
    data: {
      email,
      orderNumber: newOrderNumber.toString(),
      userId: user?.id || "",
      orderStatus: orderStatus,
      isPaid: isPaid ? isPaid : false,
      firstName: firstName || firstName || "",
      lastName: lastName || "",
      phone: phone || "",
      message: message || "",
      messagngerType: messagngerType || "",
      messenger: messenger || "",
    },
  });

  if (products && products?.length > 0) {
    products?.map((item) => (totalPrice = totalPrice + item?.price));
    await prismadb.orderItem.createMany({
      data: products?.map((item) => ({
        productId: item.productId,
        quantity: item.quantity,
        orderId: newOrder.id,
        price: item?.price,
      })),
    });

    await prismadb.order.update({
      where: {
        id: order?.id,
      },
      data: {
        totalPrice,
      },
    });
  }

  // if (store?.smtp_email && store?.smtp_password) {
  //   await sendMessageOrder({
  //     email: body?.email,
  //     userName: body?.messenger,
  //     messagngerType: body?.typeMessanger,
  //     name: body?.name,
  //     message: body?.message,
  //     smtp_email: store.smtp_email,
  //     smtp_password: store.smtp_password,
  //   });
  // }

  return res.status(200).json(HttpSuccess(newOrder));
};

//Get orders
const getOrders = async (req, res) => {
  const { userEmail, isPaid, isCount, orderStatus } = req.query;

  if (isCount) {
    const totalSales = await prismadb.order.count({
      where: {
        isPaid: true,
      },
    });

    return res.status(200).json(HttpSuccess(totalSales));
  }

  if (isPaid) {
    const paidOrders = await prismadb.order.findMany({
      where: {
        isPaid: true,
      },
      include: {
        orderItems: {
          include: {
            product: true,
          },
        },
      },
    });

    console.log(paidOrders);

    return res.status(200).json(HttpSuccess(paidOrders));
  }

  if (userEmail) {
    const userWhithOrders = await prismadb.user.findFirst({
      where: {
        email: userEmail,
      },
      include: {
        orders: {
          include: {
            orderItems: {
              include: {
                product: {
                  include: {
                    images: true,
                  },
                },
              },
            },
          },
        },
      },
    });

    return res.status(200).json(HttpSuccess(userWhithOrders));
  }

  const orders = await prismadb.order.findMany({
    where: {
      AND: [
        {
          orderStatus: orderStatus,
        },
      ],
    },
    include: {
      orderItems: {
        include: {
          product: true,
        },
      },
    },
  });

  return res.status(200).json(HttpSuccess(orders));
};

//Update order
const updateOrder = async (req, res) => {
  const body = req.body;
  const { orderId } = req.params;

  if (body?.orderItems && body?.orderItems?.length > 0) {
    await prismadb.orderItem.deleteMany({
      where: {
        orderId,
      },
    });

    await Promise.all(
      body?.orderItems?.map((item) =>
        prismadb.orderItem.create({
          data: {
            quantity: parseInt(item?.quantity),
            productId: item?.productId,
            price: item?.price,
            orderId,
          },
        })
      )
    );
  }

  const updatedOrder = await prismadb.order.update({
    where: {
      id: orderId,
    },
    data: {
      firstName: body?.firstName,
      lastName: body?.lastName,
      phone: body?.phone,
      email: body?.email,
      message: body?.message,
      messagngerType: body?.messagngerType,
      messenger: body?.messenger,
      totalPrice: body?.totalPrice,
      orderStatus: body?.orderStatus,
    },
  });

  return res.status(200).json(HttpSuccess(updatedOrder));
};

//Delete order
const deleteOrder = async (req, res) => {
  const { orderId } = req.params;

  const deleteOrder = await prismadb.order.delete({
    where: {
      id: orderId,
    },
  });

  if (!deleteOrder) {
    throw HttpError("Something went wrong...", 401);
  }

  return res.status(200).json(
    HttpSuccess({
      message: "Order success delete",
    })
  );
};

//Get order details
const getOrderDetails = async (req, res) => {
  const { orderId } = req.params;

  const order = await prismadb.order.findUnique({
    where: {
      id: orderId,
    },
    include: {
      orderItems: {
        include: {
          product: true,
        },
      },
    },
  });

  if (!order) {
    throw HttpError("Order not found", 404);
  }

  return res.status(200).json(HttpSuccess(order));
};

//Add item to order
const addItemToOrder = async (req, res) => {
  const body = req.body;
  const { orderId } = req.params;

  let totalPrice = 0;

  const productPrice = await prismadb.product.findUnique({
    where: {
      id: body?.productId,
    },
  });

  totalPrice = productPrice?.price * body?.quantity;

  const product = await prismadb.order.findUnique({
    where: {
      id: orderId,
    },
  });

  await prismadb.order.update({
    where: {
      id: orderId,
    },
    data: {
      totalPrice: product?.totalPrice + totalPrice,
    },
  });

  const orderItem = await prismadb.orderItem.findFirst({
    where: {
      productId: body?.productId,
    },
  });

  const itemToOrder = await prismadb.orderItem.upsert({
    where: {
      productId_orderId: {
        productId: body?.productId,
        orderId: orderId,
      },
    },
    update: {
      quantity: (orderItem?.quantity || 0) + Number(body?.quantity || 0),
    },
    create: {
      orderId,
      quantity: Number(body?.quantity || 0),
      productId: body?.productId,
      price: orderItem?.price,
    },
  });

  if (!itemToOrder) {
    throw HttpError("Something went wrong...", 400);
  }

  return res.status(200).json(HttpSuccess(itemToOrder));
};

//Remove order from order
const removeItemFromOrder = async (req, res) => {
  const { orderId, itemId } = req.params;

  const deleteItemFromOrder = await prismadb.orderItem.delete({
    where: {
      orderId,
      id: itemId,
    },
  });

  if (!deleteItemFromOrder) {
    throw HttpError("Something went wrong...", 400);
  }

  return res.status(200).json(
    HttpSuccess({
      message: "The product has been successfully removed from the order",
    })
  );
};

module.exports = {
  createOrder: CtrlWrapper(createOrder),
  getOrders: CtrlWrapper(getOrders),
  updateOrder: CtrlWrapper(updateOrder),
  deleteOrder: CtrlWrapper(deleteOrder),
  getOrderDetails: CtrlWrapper(getOrderDetails),
  addItemToOrder: CtrlWrapper(addItemToOrder),
  removeItemFromOrder: CtrlWrapper(removeItemFromOrder),
};
