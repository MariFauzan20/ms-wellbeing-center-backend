module.exports = (mongoose) => {
  let resultParamSchema = mongoose.Schema({
    condition: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    max_score: {
      type: Number,
      required: true,
    },
    min_score: {
      type: Number,
      required: true,
    },
  });

  const ResultParam = mongoose.model("user", resultParamSchema);
  return ResultParam;
};