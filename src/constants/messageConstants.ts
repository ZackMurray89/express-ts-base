export const SUCCESS = {
  CREATED: "Resource Created Successfully",
  UPDATED: "Resource Updated Successfully",
  DELETED: "Resource Deleted Successfully",
  LOGIN: "Login Successful",
  LOGOUT: "Logout Successful",
  OPERATION: "Operation Completed Successfully",
} as const;

export const ERROR = {
  INTERNAL_SERVER_ERROR: "Internal Server Error - Please Try Again Later",
  NOT_FOUND: "Requested Resource Not Found",
  UNAUTHORIZED: "You Do Not Have Necessary Permission To Access This Resource",
  BAD_REQUEST: "Request Failed Due To Client Side Error",
  FORBIDDEN: "You Do Not Have Permission To Access This Resource",
  TOO_MANY_REQUESTS: "Too Many Requests - Please Try Again Later",
  INVALID_CREDENTIALS: "Invalid Credentials To Use Resource",
  USERNAME_ALREADY_EXISTS: "This Username Is Already In Use",
  INVALID_TOKEN: "Invalid Token - Please Log In Again",
} as const;

export const INFO = {
  SERVER_START: "Server Started On Port: ",
  USER_LOGGED_IN: "User Logged In Successfully",
  USER_LOGGED_OUT: "User Logged Out Successfully",
  USER_REGISTERED: "New User Registered Successfully",
  HEALTH_CHECK: "API Health Check Passed",
} as const;

export const VALIDATION = {
  REQUIRED_FIELD: "This Field Is Required",
  INVALID_EMAIL: "Please Provide Valid Email Address",
  PASSWORD_TOO_SHORT: "Password Must Be At Least 8 Characters",
  PASSWORD_MISMATCH: "Passwords Don't Match",
  FIELD_TOO_LONG: "This Field Is Too Long - Max Characters: ",
} as const;

export const AUTH = {
  INVALID_CREDENTIALS: "Invalid Username Or Password",
  INVALID_TOKEN: "Your Session Has Expired - Please Log In Again",
  UNAUTHORIZED: "You Are Not Authorized To Perform This Action",
  ACCESS_GRANTED: "Access Granted",
  ACCESS_DENIED: "Access Denied",
} as const;

export const DB = {
  CONNECT_SUCCESS: "Datbase Connected Successfully",
  CONNECT_FAILURE: "Failure Connecting To Database",
  QUERY_ERROR: "Error Occurred While Querying Database",
} as const;

export const FILE = {
  FILE_UPLOADED: "File Uploaded Successfully",
  FILE_UPLOAD_ERROR: "Error Uploading File",
  FILE_NOT_FOUND: "Requested File Could Not Be Found",
  FILE_DELETED: "File Deleted Successfully",
} as const;

export const RATE_LIMIT = {
  TOO_MANY_REQUESTS: "Too Many Requests - Please Try Again Later",
  RATE_LIMIT_EXCEEDED: "Allowed Requests Exceeded",
} as const;

export const MISC = {
  PAGE_NOT_FOUND: "Requested Page Not Found",
  FEATURE_NOT_AVAILABLE: "Requested Feature Not Currently Available",
  MAINTENANCE_MODE: "System Under Maintenance - Please Try Again Later",
} as const;
