import axios from "axios";
import {
  MOCK_SERVER_URL,
  BILL_MANAGEMENT_SERVER_URL,
  ACCOUNTING_SERVER_URL,
} from "../../utils/constants";
interface RampCategory {
  id: number;
  name: string;
}
interface Payment {
  employees: string;
  amount: string;
  due_date: string;
  invoice_date: string;
  invoice_no: string;
  invoice: any;
  account_no: string;
  next_step: string;
  joining_date?: string;
}

interface Draft {
  employees: string;
  amount: string;
  due_date: string;
  invoice_date: string;
  invoice_no: string;
  account_no: number;
}

const datetypetoFormat = (dateStringText: any) => {
  const dateString = dateStringText;
  const date = new Date(dateString);

  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "2-digit",
  };

  const formattedDate = date.toLocaleDateString("en-US", options);
  return formattedDate;
};

export const extratedFeildsFromText = async (extractedText: string) => {
  const response: Promise<any> = await axios
    .post(BILL_MANAGEMENT_SERVER_URL + "/pdf/textFromFile", {
      file: extractedText.replace(/\n/g, " "),
    })
    .then((response) => {
      return response.data;
    });
};

export const fetchAllTransactions = async (): Promise<any> => {
  try {
    const response = await axios.get(
      ACCOUNTING_SERVER_URL + "/transactions/list"
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchAllDraftRows = async (): Promise<any> => {
  try {
    const response = await axios.get(
      BILL_MANAGEMENT_SERVER_URL + "/bills/listBillsEmployeesFiles"
    );
    let responseData: {
      id: string;
      employees: string;
      amount: number;
      due_date: string;
      invoice_date: string;
      invoice_no: string;
      account_no: string;
      next_step: string;
      joining_date: string;
    }[] = [];
    response.data.forEach((element: any) => {
      if (element.status == "Pending") {
        const responseDataElement = {
          id: element.id,
          employees: element.name,
          amount: element.amount,
          due_date: datetypetoFormat(element.dueDate),
          invoice_date: datetypetoFormat(element.inVoiceDate),
          invoice_no: element.inVoiceNumber,
          account_no: element.accountNumber,
          next_step: "",
          joining_date: datetypetoFormat(element.joiningDate),
        };
        responseData.push(responseDataElement);
      }
    });
    return responseData;
  } catch (error) {
    throw error;
  }
};

export const fetchAllPaymentRows = async (): Promise<any> => {
  try {
    const response = await axios.get(
      BILL_MANAGEMENT_SERVER_URL + "/bills/listBillsEmployeesFiles"
    );
    let responseData: any[] = [];
    response.data.forEach((element: any) => {
      if (element.status == "Done") {
        const responseDataElement = {
          id: element.id,
          employees: element.name,
          amount: element.amount,
          ach: "ACH",
          payment_status: "Scheduled",
          payment_date: "2020-01-17",
          due_date: datetypetoFormat(element.dueDate),
          invoice_date: datetypetoFormat(element.invoiceDate),
          next_step: "<button>click</button>",
        };
        responseData.push(responseDataElement);
      }
    });

    //const response1 = await axios.get(MOCK_SERVER_URL + "payments");
    return responseData;
  } catch (error) {
    throw error;
  }
};

export const fetchAllMappings = async (): Promise<any> => {
  try {
    // commented mock server
    // const response = await axios.get(MOCK_SERVER_URL + "mapping");
    const response = await axios.get(
      ACCOUNTING_SERVER_URL + "/categoryRule/mapping"
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchAllRampCategories = async (): Promise<any> => {
  try {
    // mock server code
    // const response = await axios.get(MOCK_SERVER_URL + "rampCategory");
    // return response.data;

    const response = await axios.get(ACCOUNTING_SERVER_URL + "/ramp/rampsList");

    let responseData: {
      id: number;
      name: string;
    }[] = [];
    response.data.forEach((element: any) => {
      const responseDataElement = {
        id: element.id,
        name: element.ramp,
      };
      responseData.push(responseDataElement);
    });

    return responseData;
  } catch (error) {
    throw error;
  }
};

export const createRampCategories = (name: string) => {
  if (name !== "") {
    axios
      .post(ACCOUNTING_SERVER_URL + "/ramp/save", {
        ramp: name,
      })
      .then((resp) => {
        console.log(resp.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
};

export const deleteDraft = async (id: number): Promise<any> => {
  try {
    const response = await axios.patch(
      BILL_MANAGEMENT_SERVER_URL + "/bills/updateBillStatus/" + id,
      { status: "Done" }
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteTransaction = async (id: number): Promise<any> => {
  try {
    const response = await axios.delete(
      ACCOUNTING_SERVER_URL + "/transactions/" + id
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createMapping = (
  rampCategory: string,
  quickbookCategory: string
) => {
  axios
    .post(ACCOUNTING_SERVER_URL + "/categoryRule/saveByName", {
      rampCategory: rampCategory,
      quickbookCategory: quickbookCategory,
    })
    .then((resp) => {
      console.log(resp.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getTransactionCountByMerchant = async (merchantName: string) => {
  try {
    const response = await axios.get(
      ACCOUNTING_SERVER_URL + "/transactions/vendors/" + merchantName
    );
    return response.data.length;
  } catch (error) {
    console.error(error);
  }
};

export const getMerchantRuleCount = async () => {
  try {
    const response = await axios.get(
      ACCOUNTING_SERVER_URL + "/merchant-rules/count"
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getCategoryRuleCount = async () => {
  try {
    const response = await axios.get(
      ACCOUNTING_SERVER_URL + "/categoryRule/count"
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
export const updateRampCardsWithMerchantName = async (
  merchantName: string,
  quickbookCategory: string
) => {
  try {
    const response = await axios.put(
      ACCOUNTING_SERVER_URL +
        `/transactions/vendors/${merchantName}/quickbooks/${quickbookCategory}`
    );
  } catch (error) {
    console.error(error);
  }
};
