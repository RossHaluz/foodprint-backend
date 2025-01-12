const {
  HttpError,
  HttpSuccess,
  CtrlWrapper,
  sendMessageFeedback,
} = require("../helpers");
const { prismadb } = require("../prismaClient");

//Get feedbacks
const getFeedbacks = async (req, res) => {
  const feedbacks = await prismadb.feedback.findMany();

  return res.status(200).json(HttpSuccess(feedbacks));
};

//Get feedback details
const getFeedbackDetails = async (req, res) => {
  const { feedbackId } = req.params;

  const feedback = await prismadb.feedback.findUnique({
    where: {
      id: feedbackId,
    },
  });

  if (!feedback) {
    throw HttpError("Feedback not found", 404);
  }

  return res.status(200).json(HttpSuccess(feedback));
};

//Create feedback
const createFeedback = async (req, res) => {
  const body = req.body;
  const { name, email, messenger, typeMessanger, message } = body;

  const newFeedback = await prismadb.feedback.create({
    data: {
      name,
      email,
      message,
      messenger,
      typeMessanger,
    },
  });

  if (!newFeedback) {
    throw HttpError("Something went wrong...", 400);
  }
  // if (store?.smtp_email && store?.smtp_password) {
  //   await sendMessageFeedback({
  //     name,
  //     email,
  //     messenger,
  //     typeMessanger,
  //     message,
  //     smtp_email: store?.smtp_email,
  //     smtp_password: store?.smtp_password,
  //   });
  // }

  return res.status(200).json(HttpSuccess(newFeedback));
};

//Delete feedback
const deleteFeedback = async (req, res) => {
  const { feedbackId } = req.params;

  const deleteFeedback = await prismadb.feedback.delete({
    where: {
      id: feedbackId,
    },
  });

  if (!deleteFeedback) {
    throw HttpError("Something went wrong...", 400);
  }

  return res.status(200).json({
    message: "Feedback succes delete",
  });
};

module.exports = {
  createFeedback: CtrlWrapper(createFeedback),
  deleteFeedback: CtrlWrapper(deleteFeedback),
  getFeedbacks: CtrlWrapper(getFeedbacks),
  getFeedbackDetails: CtrlWrapper(getFeedbackDetails),
};
