//console.clear();

function ajax({
  type = "get",
  url = "",
  data = {},
  success = () => {},
  error = () => {},
  isAsync = true
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

try {
  ajax({
    url: "http://my.api.io",
    success: () => {}
  });
} catch (e) {
  console.warn(e.message);
}
