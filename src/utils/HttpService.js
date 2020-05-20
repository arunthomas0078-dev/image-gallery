import NProgress from "nprogress";

const httpService = async (dispatch, actionHandler) => {  
  NProgress.start();
  let response =await actionHandler();  
  NProgress.done();
  return response;
}

export default httpService;