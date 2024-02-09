import { formatDate } from "helpers/format-date";
import { BaseTable, THead, Th, Tr, Td } from "./CryptoHistory.module";

export const CryptoHistory = ({ transactions }) => {
  return (
    <BaseTable>
      <THead>
        <Tr>
          <Th>№</Th>
          <Th>PRICE</Th>
          <Th>AMOUNT</Th>
          <Th>DATE</Th>
        </Tr>
      </THead>

      <tbody>
        {transactions.map(({ id, price, amount, date }, index) => (
          <Tr key={id}>
            <Td>{index + 1}</Td>
            <Td>{price}</Td>
            <Td>{amount}</Td>
            <Td>{formatDate(date)}</Td>
          </Tr>
        ))}
      </tbody>
    </BaseTable>
  );
};
