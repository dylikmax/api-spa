const invalidParamsValidation = (allowedParams) => {
  return (req, res, next) => {
    const likedAllowedParams = allowedParams.map((param) => param + "_like");

    const invalidParams = Object.keys(req.query).filter(
      (param) =>
        !allowedParams.includes(param) && !likedAllowedParams.includes(param)
    );
    if (invalidParams.length > 0) {
      return res.status(400).json({
        errors: `Invalid query parameters: ${invalidParams.join(", ")}`,
      });
    }
    next();
  };
};

module.exports = invalidParamsValidation;
