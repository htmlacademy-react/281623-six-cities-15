import { TComment } from '../offer-card/types';
import ReviewsForm from '../reviews-form/reviews-form';
import ReviewsList from '../reviews-list/reviews-list';

type ReviewsProps = {
    comments: TComment[];
    isAuth: boolean;
  }

export default function Reviews ({comments, isAuth}: ReviewsProps): JSX.Element {
  return (
    <>
      {comments.map((comment)=> (<ReviewsList key={comment.id} comment={comment}/>))}
      {isAuth && <ReviewsForm/>}
      {!isAuth && <p>Только боги могут оставлять комментарии</p>}
    </>
  );
}
