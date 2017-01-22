//console.clear();

function ajax({
  type = requireParameter("type"),
  url = requireParameter("url"),
  data = requireParameter("data"),
  success = requireParameter("success"),
  error = requireParameter("error"),
  isAsync = requireParameter("isAsync")
  } = {}) {
    console.log(JSON.stringify({
      type,
      url,
      data,
      success,
      error,
      isAsync
    }, null, 2));
};

function requireParameter(name) {
  throw new Error (`Missing parameter "${name}"`);
}

try {
  ajax({
    type: "get",
    url: "http://my.api.io",
    data: {},
    success: () => {},
    error: () => {},
    isAsync: true
  });
} catch (e) {
  console.warn(e.message);
}
