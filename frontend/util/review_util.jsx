
export const fetchReviews = (itemId) => (
  $.ajax({
    method: "GET",
    url: `api/items/${itemId}/reviews`,
  })
);

export const createReview = (review, itemId) => (
  $.ajax({
    method: "POST",
    url: `api/items/${itemId}/reviews`,
    data: {review}
  })
);

export const deleteReview = (reviewId) => (
  $.ajax({
    method: "DELETE",
    url: `api/reviews/${reviewId}`,
  })
);

export const parseTime = (rdate) => {
  let date = new Date(rdate);
  let day = date.getDate();
  let year = date.getFullYear();
  let monthNum = date.getMonth();
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May',
  'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
  let monthStr = months[monthNum];
  let fulldate = "";
  fulldate += monthStr + " " + day +", " + year;


  return fulldate;
};