export const companies = [
  "SPI Insurance Company",
  "FORI Insurance Company",
  "Small Insurance Company",
  "Asia Insurance Company Limited",
  "United Insurance Company Limited",
  "Adamjee Insurance Company Limited",
  "IGI General Insurance Company Limited",
  "State life Insurance Company of Pakistan",
  "The Pakistan General Insurance Company",
  "Alflah Insurance Company ",
];

export const initialState = {
  personal: {
    id: "",
    phone: "",
    email: "",
    firstname: "",
    lastname: "",
    dob: "",
    gender: "",
    address: "",
    city: "",
    state: "",
    zipcode: undefined,
    snapshot: undefined,
  },
  insurance: {
    haveInsurance: "no",
    insurance_front: undefined,
    insurance_attest: false,
    insurance_back: undefined,
    insurance_company: "",
    insurance_number: undefined,
  },
};

export const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

export const layout = {
  labelCol: {
    span: 11,
  },
  wrapperCol: {
    span: 12,
  },
};

export const leftRightCol = {
  xxl: { span: 4 },
  xl: { span: 4 },
  lg: { span: 3 },
  md: { span: 2 },
  xs: { span: 1 },
  sm: { span: 1 },
};

export const layoutformat = {
  xxl: { span: 16 },
  xl: { span: 16 },
  lg: { span: 18 },
  md: { span: 20 },
  xs: { span: 22 },
  sm: { span: 22 },
};
export const column = {
  xxl: { span: 11, offset: 1 },
  xl: { span: 11, offset: 1 },
  lg: { span: 11, offset: 1 },
  md: { span: 24 },
  xs: { span: 24 },
  sm: { span: 24 },
};
