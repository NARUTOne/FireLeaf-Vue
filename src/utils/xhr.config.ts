import xhr from "axhr";
import { Message } from "element-ui";
import config from "./config";
import {resIntf} from "./interface";

const {apiBaseUrl} = config;
let apiUrl = "";

interface xhrOptInterface {
  baseUrl: string,
  url: string
}

xhr.getUrl = (option:xhrOptInterface) => {
  if (option.baseUrl) {
    apiUrl = option.baseUrl + option.url;
    return {
      baseUrl: option.baseUrl,
      url: option.url
    };
  }
  apiUrl = apiBaseUrl + option.url;
  return {
    baseUrl: apiBaseUrl,
    url: option.url
  };
};

// IE接口缓存
xhr.baseData = {
  t: Date.now()
};

// 全局配置

xhr.defaultConfig = {
  timeout: 10000,
  withCredentials: true // 允许携带cookie
};

/**
 *
 *
SUCC("000000", "成功"),
FAILURE("100001", "失败"),
ERROR("100002", "内部错误"),
PARAM_ERROR("100003", "参数错误"),
PASSWD_ERROR("100004", "密码错误"),
CHECK_CODE_ERROR("100005", "校验码错误"),
TICKET_ERROR("100006", "ticket错误"),
FILE_ERROR("100007", "文件模板不合法"),
FILE_CONTENT_ERROR("100008", "文件数据不合法"),
INVALID_IP_ADDRESS("100011", "IP登录受限"),
OA_SEND_ERROR("100012", "发起OA审批异常"),
USER_INVALID_SESSION_ERROR("100013","session过期"),
USER_NOTRESOURCES_ERROR("100014","访问权限受制，禁止访问！"),
//BI支持系统
INVOICE_STATUS_ERROR("300001","应收状态错误"),
SERVICE_ERROR ("100000", "服务器开小差了，请稍后再试！");
 * */

xhr.success = (response: resIntf) => {
  const res = response;
  let isSuccess = true;

  if (typeof res !== "object") {
    Message({
      message: apiUrl + ": response data should be JSON",
      type: "error"
    });
    isSuccess = false;
  }
  switch (res.code + "") {
  case "000000":
    isSuccess = true;
    break;
  case "100006":
    isSuccess = false;
    break;
  case "100013":
    isSuccess = false;
    break;
  default:
    Message({
      message: res.message || "unknown error",
      type: "error"
    });
    isSuccess = false;
  }

  return isSuccess;
};

xhr.error = (err:any) => {
  Message({
    message: "服务器开小差！",
    type: "error"
  });
  return err;
};
