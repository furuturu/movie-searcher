import { VoteSelectStyled } from "./VoteSelect.styles";
import { useTranslation } from "react-i18next";

interface IVoteProps {
  handleVoteSelect: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}
export const VoteSelect = ({ handleVoteSelect }: IVoteProps) => {
  const votes = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  const { t } = useTranslation();
  return (
    <>
      <h1>{t("search.vote")}</h1>
      <VoteSelectStyled onChange={handleVoteSelect}>
        {votes.map((vote) => (
          <option value={vote} key={vote}>
            {vote}
          </option>
        ))}
      </VoteSelectStyled>
    </>
  );
};
