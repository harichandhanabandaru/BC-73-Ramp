import { Key } from "react";
import Invoice from "../../public/assets/icons/invoiceicon.svg";

export const NAME = "orders@supertodo.me";
export const TEXT = "text";
export const PASSWORD = "password";
export const SEARCH = "Search & filter";

export const TYPOGRAPHYANCHORTEXT = "Sign up";
export const TYPOGRAPHYANCHORVALUE = "Don’t have an account?";

export interface HEADERNAMES {
  id: Key;
  text: string;
}

export const HEADER: HEADERNAMES[] = [
  {
    id: 1,
    text: "Insights",
  },
  {
    id: 2,
    text: "Transaction",
  },
  {
    id: 3,
    text: "Cards",
  },
  {
    id: 4,
    text: "Company",
  },
  {
    id: 5,
    text: "Bill pay",
  },
  {
    id: 6,
    text: "Vendors",
  },
  {
    id: 7,
    text: "Reimbursement",
  },
  {
    id: 8,
    text: "Accounting",
  },
];
export const CREATE_RAMP_CATEGORY_CARD_BODY =
  "Ramp automatically categorizes your card transactions. You can set a default QuickBooks Category for each Ramp Category below.";

export const MENU: any = [
  { label: "My Ramp", value: "My Ramp" },
  { label: "Create Ramp Category", value: "Create Ramp Category" },
  { label: "View Ramp Category", value: "View Ramp Category" },
  { label: "Delete Ramp Category", value: "Delete Ramp Category" },
  { label: "Settings", value: "Settings" },
  { label: "Log out", value: "Log out" },
];
export const EMAIL_VALIDATION_MESSAGE="Please enter valid Email";
export const PASSWORD_VALIDATION_MESSAGE="Please enter valid Password";
export const NAME_VALIDATION_MESSAGE="Please enter valid Name";

export const MERCHANT_RULE_MENU = [
  { label: "Expense", value: "Expense" },
  { label: "Travel", value: "Travel" },
  { label: "Travel meals", value: "Travel meals" },
  { label: "Hotels", value: "Hotels" },
];
export const RAMP_CATEGORTY_BUTTON = "Add new";

export const RAMP_CATEGORTY_LABEL = "Ramp category";
export const RAMP_CATEGORTY_PLACEHOLDER = "Enter Ramp category";
export const ICON_NOT_FOUND = "not found icon";
export const DOWNLOAD = "Download";

export const RAMP_PERKS = "Ramp perks";

export const SIGNIN_TITLE = "Sign in to your account";

export const EMAIL_TEXT = "Email";

export const PASSWORD_TEXT = "Password";

export const FORGOT_PASSWORD = "Forgot your password ?";

export const Stay_SIGNED = "Stay signed in for a week";

export const REPORTINGCARDSUBTITLE = [
  "You're paying for Amazon Web",
  "Services - leverage our partnership",
];

export const REPORTINGCARDPRICEDETAILS = ["Potential Savings", "$5,000.00"];

export const SKIPPREFILLINGCARDTEXT = [
  "Upload an invoice on the right and Ramp will read the invoice and prefill",
  "the bill for you. Or alternatively, do it the old fashioned way :",
];

export const SKIPPREFILLINGCARDBTNTEXT = "Skip Prefilling";

export const CREATE_RAMP_CATEGORY_CARD_TEXT = [
  "Create Ramp category",
  "Ramp categories",
  "Ramp automatically categorizes your card transactions. You can",
  "set a default QuickBooks Category for each Ramp Category",
  "below.",
  "Ramp category",
  "Enter Ramp category",
];

export const SIGNUP_TITLE = "Sign Up";

export const FULL_NAME = "Full name";

export const SIGNUP_EMAIL_TEXT = "Email id";

export const SIGN_BUTTON_TEXT = "Continue";

export const SIGN_OR_TEXT = "OR";

export const VALID_NAME = new RegExp("^[a-zA-Z\\s]+$");
export const VALID_EMAIL = new RegExp("^[\\w.+-]+@(gmail|zemosolabs)\\.com$");
export const VALID_PASSWORD = new RegExp(
  "^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$"
);
export const VALID_INVOICE_NUMBER = new RegExp(/^[0-9\b]+$/);
export const VALID_AMOUNT = new RegExp(/^[-+]?[0-9]+\.[0-9]+$/);
export const VALID_QUICKBOOK_LOCATION = new RegExp(/^[a-zA-Z ]*$/);
export const DELETE = "Delete";
export const CLEAR_FILTER = "Clear filter";
export const FILTER = "Filter";
export const SYNC = "Sync";
export const OPTIONS = ["Drafts", "Payments"];
export const employeeName = "Julie Mendez";
export const ROWS = [
  {
    transactions: ["H&M1", "casio"],
    amount: "$42,000",
    date: "Apr 14, 2004",
    user: ["Hellena John", "(Virtual 7007)"],
    receipt: "#200257",
    memo: "21-00006",
    id: 1,
  },
  {
    transactions: ["H&M2", "casio"],
    amount: "$42,000",
    date: "Apr 14, 2004",
    user: ["Hellena John", "(Virtual 7007)"],
    receipt: "#200257",
    memo: "21-00006",
    id: 2,
  },
  {
    transactions: ["H&M3", "casio"],
    amount: "$42,000",
    date: "Apr 14, 2004",
    user: ["Hellena John", "(Virtual 7007)"],
    receipt: "#200257",
    memo: "21-00006",
    id: 3,
  },
  {
    transactions: ["H&M4", "casio"],
    amount: "$42,000",
    date: "Apr 14, 2004",
    user: ["Hellena John", "(Virtual 7007)"],
    receipt: "#200257",
    memo: "21-00006",
    id: 4,
  },
  {
    transactions: ["H&M5", "casio"],
    amount: "$42,000",
    date: "Apr 14, 2004",
    user: ["Hellena John", "(Virtual 7007)"],
    receipt: "#200257",
    memo: "21-00006",
    id: 5,
  },
  {
    transactions: ["H&M6", "casio"],
    amount: "$42,000",
    date: "Apr 14, 2004",
    user: ["Hellena John", "(Virtual 7007)"],
    receipt: "#200257",
    memo: "21-00006",
    id: 6,
  },
  {
    transactions: ["H&M7", "casio"],
    amount: "$42,000",
    date: "Apr 14, 2004",
    user: ["Hellena John", "(Virtual 7007)"],
    receipt: "#200257",
    memo: "21-00006",
    id: 7,
  },
  {
    transactions: ["H&M8", "casio"],
    amount: "$42,000",
    date: "Apr 14, 2004",
    user: ["Hellena John", "(Virtual 7007)"],
    receipt: "#200257",
    memo: "21-00006",
    id: 8,
  },
  {
    transactions: ["H&M9", "casio"],
    amount: "$42,000",
    date: "Apr 14, 2004",
    user: ["Hellena John", "(Virtual 7007)"],
    receipt: "#200257",
    memo: "21-00006",
    id: 9,
  },
  {
    transactions: ["H&M10", "casio"],
    amount: "$42,000",
    date: "Apr 14, 2004",
    user: ["Hellena John", "(Virtual 7007)"],
    receipt: "#200257",
    memo: "21-00006",
    id: 10,
  },
];
export const DRAFTS = "Drafts";
export const PAYMENTS = "Payments";
export const InvoiceMockData = [
  {
    contact: "ygodiwala@gmail.com",
    invoiceNumber: "2353464575689",
    location: "London",
    amount: "2500.00",
    invoiceDate: "2023-12-09",
    billDueDate: "2023-12-05",
    category: "Equipment rental",
    classValue: "Rent",
    customJob: "Manager",
    paymentType: "ACH (Direct deposit)",
  },
];

export const REIMBURSEMENTPAYMENTDATA = [
  {
    id: 1,
    employees: "Julie Mendez",
    amount: "$2864.50",
    ach: "ACH",
    payment_status: "Scheduled",
    payment_date: "2020-01-17",
    due_date: "2020-01-17",
    invoice_date: "2020-04-07",
    next_step: "<button>click</button>",
  },
  {
    id: 2,
    employees: "Julie Mendez",
    amount: "$2864.50",
    ach: "ACH",
    payment_status: "Scheduled",
    payment_date: "2020-01-17",
    due_date: "2020-01-17",
    invoice_date: "2020-04-07",
    next_step: "<button>click</button>",
  },
  {
    id: 3,
    employees: "Julie Mendez",
    amount: "$2864.50",
    ach: "ACH",
    payment_status: "Scheduled",
    payment_date: "2020-01-17",
    due_date: "2020-01-17",
    invoice_date: "2020-04-07",
    next_step: "<button>click</button>",
  },
  {
    id: 4,
    employees: "Julie Mendez",
    amount: "$2864.50",
    ach: "ACH",
    payment_status: "Scheduled",
    payment_date: "2020-01-17",
    due_date: "2020-01-17",
    invoice_date: "2020-04-07",
    next_step: "<button>click</button>",
  },
  {
    id: 5,
    employees: "Julie Mendez",
    amount: "$2864.50",
    ach: "ACH",
    payment_status: "Scheduled",
    payment_date: "2020-01-17",
    due_date: "2020-01-17",
    invoice_date: "2020-04-07",
    next_step: "<button>click</button>",
  },
  {
    id: 6,
    employees: "Julie Mendez",
    amount: "$2864.50",
    ach: "ACH",
    payment_status: "Scheduled",
    payment_date: "2020-01-17",
    due_date: "2020-01-17",
    invoice_date: "2020-04-07",
    next_step: "<button>click</button>",
  },
  {
    id: 7,
    employees: "Julie Mendez",
    amount: "$2864.50",
    ach: "ACH",
    payment_status: "Scheduled",
    payment_date: "2020-01-17",
    due_date: "2020-01-17",
    invoice_date: "2020-04-07",
    next_step: "<button>click</button>",
  },
  {
    id: 8,
    employees: "Julie Mendez",
    amount: "$2864.50",
    ach: "ACH",
    payment_status: "Scheduled",
    payment_date: "2020-01-17",
    due_date: "2020-01-17",
    invoice_date: "2020-04-07",
    next_step: "<button>click</button>",
  },
  {
    id: 9,
    employees: "Julie Mendez",
    amount: "$2864.50",
    ach: "ACH",
    payment_status: "Scheduled",
    payment_date: "2020-01-17",
    due_date: "2020-01-17",
    invoice_date: "2020-04-07",
    next_step: "<button>click</button>",
  },
  {
    id: 10,
    employees: "Julie Mendez",
    amount: "$2864.50",
    ach: "ACH",
    payment_status: "Scheduled",
    payment_date: "2020-01-17",
    due_date: "2020-01-17",
    invoice_date: "2020-04-07",
    next_step: "<button>click</button>",
  },
  {
    id: 11,
    employees: "Julie Mendez",
    amount: "$2864.50",
    ach: "ACH",
    payment_status: "Scheduled",
    payment_date: "2020-01-17",
    due_date: "2020-01-17",
    invoice_date: "2020-04-07",
    next_step: "<button>click</button>",
  },
  {
    id: 12,
    employees: "Julie Mendez",
    amount: "$2864.50",
    ach: "ACH",
    payment_status: "Scheduled",
    payment_date: "2020-01-17",
    due_date: "2020-01-17",
    invoice_date: "2020-04-07",
    next_step: "<button>click</button>",
  },
];

export const QUICK_BOOKS_CATEGORY: any = [
  { label: "Expense", value: "Expense" },
  { label: "Travel", value: "Travel" },
  { label: "Travel meals", value: "Travel meals" },
  { label: "Hotels", value: "Hotels" },
];

export const RAMP_CATEGORY = "Ramp category";

export const QUICKBOOKS_CATEGORY = "Quickbooks category";

export const CREATE_RULE = "Create rule";

export const CANCEL = "Cancel";

// export const MERCHANT_RULE_HEADER = "Save time with a merchant Rule";
export const NEW_BILL = "New bill";
export const ONE_LAST_LOOK = "One last look";
export const PAYMENT_METHOD = "Payment method";
export const SCHEDULED_DATE = "Scheduled date";
export const EXPECTED_ARRIVAL = "Estimated arrival";
export const SEND_TO = "Send to";
export const ADDED_BY = "Added by";
export const WITHDRAW_FROM = "Withdraw from";
export const SAVING_ACCOUNT = "Saving account";
export const TO_BE_APPROVED_BY = "To be approved by";
export const AUTO_APPROVED = "Auto approved";
export const CLICK_ME = ["Click", "here", "to login again"];
export const LOGOUT_TEXT = "You have been successfully logged out";
export const NEW_BILL_CARD = "New bill";
export const WHO_IS_FOR = "Who’s it for ?";
export const EMPLOYEE_CONTACY = "Employee contact";
export const INVOICE_NUMBER = "Invoice number";
export const QUICK_BOOKS_LOCATIONS = "Quickbooks location";
export const MEMO = "Memo";
export const WHAT_FOR = "What for ?";
export const AMOUNT = "Amount";
export const QUICK_BOOKS_DESCRIPTION = "Quickbooks description";
export const CATEGORY = "Category";
export const CLASS = "Class";
export const CUSTOM_JOB = "Custom/job";
export const PAYMENT_DETAILS = "Payment Details";
export const PAYMENT_TYPE = "Payment type";
export const INVOICE_DATE = "Invoice date";
export const BILL_DUE_DATE = "Bill due date";
export const INVOICE_TOTAL = "Invoice total";
export const ADD_ANOTHER_LINE = "Add another line";

export const INVOICE_NUMBER_ERROR_MESSAGE = "Please enter valid Invoice Number";
export const LOCATION_ERROR_MESSAGE = "Please enter valid Quickbook Location";

export const CONTACT_ERROR_MESSAGE = "Please enter valid Employee Contact";
export const AMOUNT_ERROR_MESSAGE = "Please enter valid Amount with decimal";

export const REIMBURSEMENDATA = [
  {
    id: 1,
    employees: "Snow jang",
    amount: "$46,000",
    due_date: "Apr 09, 2011",
    invoice_date: "Sep 27, 2016",
    invoice_no: "#526587",
    invoice: Invoice,
    account_no: "5205896212",
    next_step: "<button>click</button>",
  },
  {
    id: 2,
    employees: "marry",
    amount: "$46,000",
    due_date: "Apr 09, 2011",
    invoice_date: "Sep 27, 2016",
    invoice_no: "#526587",
    invoice: Invoice,
    account_no: "5205896212",
    next_step: "",
  },
  {
    id: 3,
    employees: "vikram",
    amount: "$46,000",
    due_date: "Apr 09, 2011",
    invoice_date: "Sep 27, 2016",
    invoice_no: "#526587",
    invoice: Invoice,
    account_no: "5205896212",
    next_step: "",
  },
  {
    id: 4,
    employees: "vinod",
    amount: "$46,000",
    due_date: "Apr 09, 2011",
    invoice_date: "Sep 27, 2016",
    invoice_no: "#526587",
    invoice: Invoice,
    account_no: "5205896212",
    next_step: "",
  },
  {
    id: 5,
    employees: "Snow",
    amount: "$46,000",
    due_date: "Apr 09, 2011",
    invoice_date: "Sep 27, 2016",
    invoice_no: "#526587",
    invoice: Invoice,
    account_no: "5205896212",
    next_step: "",
  },
  {
    id: 6,
    employees: "Snow",
    amount: "$46,000",
    due_date: "Apr 09, 2011",
    invoice_date: "Sep 27, 2016",
    invoice_no: "#526587",
    invoice: Invoice,
    account_no: "5205896212",
    next_step: "",
  },
  {
    id: 7,
    employees: "Snow",
    amount: "$46,000",
    due_date: "Apr 09, 2011",
    invoice_date: "Sep 27, 2016",
    invoice_no: "#526587",
    invoice: Invoice,
    account_no: "5205896212",
    next_step: "",
  },
  {
    id: 8,
    employees: "Snow",
    amount: "$46,000",
    due_date: "Apr 09, 2011",
    invoice_date: "Sep 27, 2016",
    invoice_no: "#526587",
    invoice: Invoice,
    account_no: "5205896212",
    next_step: "",
  },
  {
    id: 9,
    employees: "Snow",
    amount: "$46,000",
    due_date: "Apr 09, 2011",
    invoice_date: "Sep 27, 2016",
    invoice_no: "#526587",
    invoice: Invoice,
    account_no: "5205896212",
    next_step: "",
  },
  {
    id: 10,
    employees: "Snow",
    amount: "$46,000",
    due_date: "Apr 09, 2011",
    invoice_date: "Sep 27, 2016",
    invoice_no: "#526587",
    invoice: Invoice,
    account_no: "5205896212",
    next_step: "",
  },
  {
    id: 11,
    employees: "Snow",
    amount: "$46,000",
    due_date: "Apr 09, 2011",
    invoice_date: "Sep 27, 2016",
    invoice_no: "#526587",
    invoice: Invoice,
    account_no: "5205896212",
    next_step: "",
  },
];

export const ACCOUNTINGPAGEDATA = [
  {
    name: "Missing items",
    count: 79,
  },
  {
    name: "Merchant rules",
    count: 2,
  },
  {
    name: "Category rules",
    count: 3,
  },
  {
    name: "Department rules",
    count: 0,
  },
  {
    name: "Location rules",
    count: 0,
  },
];

export const REPORTING = "Reporting";

export const LOWERPRICINGPLANCARD = [
  "Lower your annual cost for Asana by",
  "switching to an annual plan.",
];

export const MERCHANT_RULE_HEADER = "Save time with a merchant Rule";

export const CREATE_CATEGORY_RULE = "Create category rule";

export const CATEGORY_RULES = "Category Rules";

export const CATEGORY_RULES_DESC =
  "Ramp automatically categorizes your card transactions. You can set a default QuickBooks Category for each Ramp Category below.";

export const ACTIVE_RULES = "Active rules";

export const RECENT_CATEGORY = "Recent categories";

export const LOWERPRICINGPLANCARDDETAILS = ["Potential Savings", "$250.00"];
export const LOWERPRICINGPLANCARDDETAILS1 = ["Potential Savings", "$430.00"];
export const REPORTING_CARD_TEXT = [
  "Partner reward found",
  "Lower pricing plan found",
];
export const REPORTING_CARD_LINK = "Go to partner reward";

export const WHAT_ARE_CATEGORY_RULES = "What are category rules?";

export const WHAT_ARE_CATEGORY_RULES_DESC =
  "Category rules allow you to set a default QuickBooks Category for all transactions from a specific Ramp Category.";

export const SEE_ALL_CATEGORY = "See all categories";

export const CLIENT_ID =
  "391432842944-0asg8l0aeijsea93nbl67v32nl9673tv.apps.googleusercontent.com";

export const DONT_HAVE_ACC = "Don’t have an account?";

export const ALREADY_HAVE_ACC = "Already have an account?";

export const SIGN_IN = "Sign in";

export const MOCK_SERVER_URL = process.env.REACT_APP_MOCK_SERVER_URL;

export const BACKEND_SERVER_DEPLOYED = process.env.REACT_APP_BACKEND_SERVER_DEPLOYED;

export const USER_AUTHENTICATION = `${BACKEND_SERVER_DEPLOYED}/user`;

export const BILL_MANAGEMENT_SERVER_URL=`${BACKEND_SERVER_DEPLOYED}/bill`;

export const ACCOUNTING_SERVER_URL=`${BACKEND_SERVER_DEPLOYED}/accounting`;