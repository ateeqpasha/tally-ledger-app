import React from 'react';
import axios from 'axios';

const App = () => {
    const postLedgerData = async () => {
//         const xmlData = `
//    <ENVELOPE>
//     <HEADER>
//         <TALLYREQUEST>Import Data</TALLYREQUEST>
//     </HEADER>
//     <BODY>
//         <IMPORTDATA>
//             <REQUESTDESC>
//                 <REPORTNAME>All Masters</REPORTNAME>
//                 <STATICVARIABLES>
//                     <SVCURRENTCOMPANY>RS TAX</SVCURRENTCOMPANY>
//                 </STATICVARIABLES>
//             </REQUESTDESC>
//             <REQUESTDATA>
//                 <TALLYMESSAGE xmlns:UDF="TallyUDF">
//                     <LEDGER NAME="Ledger 1200 NEW" ACTION="Create">
//                         <NAME>Ledger 1200 NEW</NAME>
//                         <PARENT>Sundry Debtors</PARENT> <!-- Specifies the group name -->
//                         <ADDRESS.LIST TYPE="String">
//                             <ADDRESS>123 Example St</ADDRESS>
//                             <ADDRESS>City, State, ZIP</ADDRESS>
//                         </ADDRESS.LIST>
//                         <BANKDETAILS.LIST>
//                             <BANKNAME>Bank Name</BANKNAME>
//                             <ACCOUNTTYPE>Savings</ACCOUNTTYPE>
//                             <ACCOUNTNUMBER>123456789</ACCOUNTNUMBER>
//                         </BANKDETAILS.LIST>
//                         <GSTREGISTRATIONNUMBER>GST1234567890</GSTREGISTRATIONNUMBER>
//                     </LEDGER>
//                 </TALLYMESSAGE>
//             </REQUESTDATA>
//         </IMPORTDATA>
//     </BODY>
// </ENVELOPE>
//         `;

const xmlData = `
<ENVELOPE>
<HEADER>
<TALLYREQUEST>Import Data</TALLYREQUEST>
</HEADER>
<BODY>
<IMPORTDATA>
<REQUESTDESC>
<REPORTNAME>Vouchers</REPORTNAME>
<STATICVARIABLES>
<SVCURRENTCOMPANY>RS TAX</SVCURRENTCOMPANY>
</STATICVARIABLES>
</REQUESTDESC>
<REQUESTDATA>
<TALLYMESSAGE xmlns:UDF="TallyUDF">
<VOUCHER REMOTEID="" VCHTYPE="Sales" ACTION="Create">
  <VOUCHERTYPENAME>Sales</VOUCHERTYPENAME>
  <DATE>20240401</DATE>
  <EFFECTIVEDATE>20240401</EFFECTIVEDATE>
  <REFERENCE></REFERENCE>
  <NARRATION></NARRATION>
<VOUCHERNUMBER>JBR23A000010</VOUCHERNUMBER>
  <ALTERID> 174656</ALTERID>
  <ALLLEDGERENTRIES.LIST>
  <REMOVEZEROENTRIES>No</REMOVEZEROENTRIES>
  <ISDEEMEDPOSITIVE>Yes</ISDEEMEDPOSITIVE>
  <LEDGERNAME>EQUATOR GLOBAL  TRADING  PVT. LTD</LEDGERNAME>
  <AMOUNT>-4179.96</AMOUNT>
  </ALLLEDGERENTRIES.LIST>
  <ALLLEDGERENTRIES.LIST>
  <REMOVEZEROENTRIES>No</REMOVEZEROENTRIES>
  <ISDEEMEDPOSITIVE>No</ISDEEMEDPOSITIVE>
  <LEDGERNAME>GST Sales @ 18%</LEDGERNAME>
  <AMOUNT>3538.72</AMOUNT>
 <INVENTORYALLOCATIONS.LIST>
  <ISDEEMEDPOSITIVE>No</ISDEEMEDPOSITIVE>
  <STOCKITEMNAME>XLCWASHER</STOCKITEMNAME>
  <AMOUNT>19.55</AMOUNT>
  <ACTUALQTY>5 </ACTUALQTY>
  <BILLEDQTY>5 </BILLEDQTY>
  <RATE>/</RATE>
 <BATCHALLOCATIONS.LIST>
  <TRACKINGNUMBER />
  <MFDON>20240401</MFDON>
  <EXPIRYPERIOD />
  <AMOUNT>19.55</AMOUNT>
  <ACTUALQTY>5 </ACTUALQTY>
  <BILLEDQTY>5 </BILLEDQTY>
<GODOWNNAME></GODOWNNAME>
  </BATCHALLOCATIONS.LIST>
  </INVENTORYALLOCATIONS.LIST>
 <INVENTORYALLOCATIONS.LIST>
  <ISDEEMEDPOSITIVE>No</ISDEEMEDPOSITIVE>
  <STOCKITEMNAME>XXCLOTH</STOCKITEMNAME>
  <AMOUNT>23.44</AMOUNT>
  <ACTUALQTY>0.5 </ACTUALQTY>
  <BILLEDQTY>0.5 </BILLEDQTY>
  <RATE>/</RATE>
 <BATCHALLOCATIONS.LIST>
  <TRACKINGNUMBER />
  <MFDON>20240401</MFDON>
  <EXPIRYPERIOD />
  <AMOUNT>23.44</AMOUNT>
  <ACTUALQTY>0.5 </ACTUALQTY>
  <BILLEDQTY>0.5 </BILLEDQTY>
<GODOWNNAME></GODOWNNAME>
  </BATCHALLOCATIONS.LIST>
  </INVENTORYALLOCATIONS.LIST>
 <INVENTORYALLOCATIONS.LIST>
  <ISDEEMEDPOSITIVE>No</ISDEEMEDPOSITIVE>
  <STOCKITEMNAME>B008081802410</STOCKITEMNAME>
  <AMOUNT>355.93</AMOUNT>
  <ACTUALQTY>1 </ACTUALQTY>
  <BILLEDQTY>1 </BILLEDQTY>
  <RATE>/</RATE>
 <BATCHALLOCATIONS.LIST>
  <TRACKINGNUMBER />
  <MFDON>20240401</MFDON>
  <EXPIRYPERIOD />
  <AMOUNT>355.93</AMOUNT>
  <ACTUALQTY>1 </ACTUALQTY>
  <BILLEDQTY>1 </BILLEDQTY>
<GODOWNNAME></GODOWNNAME>
  </BATCHALLOCATIONS.LIST>
  </INVENTORYALLOCATIONS.LIST>
 <INVENTORYALLOCATIONS.LIST>
  <ISDEEMEDPOSITIVE>No</ISDEEMEDPOSITIVE>
  <STOCKITEMNAME>B008080900252</STOCKITEMNAME>
  <AMOUNT>1330.51</AMOUNT>
  <ACTUALQTY>1 </ACTUALQTY>
  <BILLEDQTY>1 </BILLEDQTY>
  <RATE>/</RATE>
 <BATCHALLOCATIONS.LIST>
  <TRACKINGNUMBER />
  <MFDON>20240401</MFDON>
  <EXPIRYPERIOD />
  <AMOUNT>1330.51</AMOUNT>
  <ACTUALQTY>1 </ACTUALQTY>
  <BILLEDQTY>1 </BILLEDQTY>
<GODOWNNAME></GODOWNNAME>
  </BATCHALLOCATIONS.LIST>
  </INVENTORYALLOCATIONS.LIST>
 <INVENTORYALLOCATIONS.LIST>
  <ISDEEMEDPOSITIVE>No</ISDEEMEDPOSITIVE>
  <STOCKITEMNAME>XFOIL00014</STOCKITEMNAME>
  <AMOUNT>1809.29</AMOUNT>
  <ACTUALQTY>7 </ACTUALQTY>
  <BILLEDQTY>7 </BILLEDQTY>
  <RATE>/</RATE>
 <BATCHALLOCATIONS.LIST>
  <TRACKINGNUMBER />
  <MFDON>20240401</MFDON>
  <EXPIRYPERIOD />
  <AMOUNT>1809.29</AMOUNT>
  <ACTUALQTY>7 </ACTUALQTY>
  <BILLEDQTY>7 </BILLEDQTY>
<GODOWNNAME></GODOWNNAME>
  </BATCHALLOCATIONS.LIST>
  </INVENTORYALLOCATIONS.LIST>
  </ALLLEDGERENTRIES.LIST>
  <ALLLEDGERENTRIES.LIST>
  <REMOVEZEROENTRIES>No</REMOVEZEROENTRIES>
  <ISDEEMEDPOSITIVE>No</ISDEEMEDPOSITIVE>
  <LEDGERNAME>CGST</LEDGERNAME>
  <AMOUNT>320.62</AMOUNT>
  </ALLLEDGERENTRIES.LIST>
  <ALLLEDGERENTRIES.LIST>
  <REMOVEZEROENTRIES>No</REMOVEZEROENTRIES>
  <ISDEEMEDPOSITIVE>No</ISDEEMEDPOSITIVE>
  <LEDGERNAME>SGST</LEDGERNAME>
  <AMOUNT>320.62</AMOUNT>
  </ALLLEDGERENTRIES.LIST>
  </VOUCHER>
  </TALLYMESSAGE>
  </REQUESTDATA>
  </IMPORTDATA>
  </BODY>
  </ENVELOPE>`;
            try {
                const response = await axios.post('/tally', xmlData, {
                    headers: {
                        'Content-Type': 'text/xml',
                    },
                });
                console.log('Response:', response.data);
            } catch (error) {
                if (error.response) {
                    // The server responded with a status code outside the range of 2xx
                    console.error('Error response:', error.response.data);
                } else if (error.request) {
                    // The request was made, but no response was received
                    console.error('Error request:', error.request);
                } else {
                    // Something went wrong in setting up the request
                    console.error('Error message:', error.message);
                }
            }
        };
        
    return (
        <div>
            <h1>Tally Ledger Posting</h1>
            <button onClick={postLedgerData}>Post Ledger Data</button>
        </div>
    );
};

export default App;

