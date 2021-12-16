import { ReviewContainer, SReview } from "./Reviews.styles";
import { Scrollbars } from "react-custom-scrollbars";
import { useTranslation } from "react-i18next";
import { IReviews } from "../../../../types/types";

export const Reviews = ({ reviews }: IReviews) => {
  const { t } = useTranslation();
  return (
    <ReviewContainer>
      <h1>{t("details.reviews")}</h1>
      <Scrollbars style={{ height: 300, width: "auto" }}>
        {reviews.map((review) => (
          <SReview key={review.author}>
            <h4>{review.author}</h4>
            <p>{review.content}</p>
          </SReview>
        ))}
      </Scrollbars>
    </ReviewContainer>
  );
};
