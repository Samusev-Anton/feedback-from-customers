import React from "react";
import PropTypes from "prop-types";
import { Comment } from "../Comment/Comment";
import { Grid } from "../Grid/Grid";
// import { comments } from "../../helpers/comments";
import { useGetCommentsQuery } from "../../redux/commentApi";
import { useSelector } from "react-redux";
import { selectFilterValue } from "../../redux/filterSlice";
import { useEffect, useState } from "react";
// {
//   useGetCommentsQuery, useAddCommentsMutation, useUpdateCommentCountMutation;
// }
export const Comments = () => {
  const [filteredComments, setfilteredComments] = useState([]);

  const { data: comments } = useGetCommentsQuery();
  const filter = useSelector(selectFilterValue);

  useEffect(() => {
    const getComments = async () => {
      try {
        const filteredComments = await comments.filter((comment) =>
          comment.content.toLowerCase().includes(filter.toLowerCase())
        );
        setfilteredComments(filteredComments);
      } catch (error) {}
    };
    getComments();
    // console.log(filteredComments);
  }, [comments, filter]);

  // if (!comments) {
  //   return;
  // }

  return (
    <Grid>
      {filteredComments.map((comment) => (
        <Comment key={comment.id} {...comment} />
      ))}
    </Grid>
  );
};

Comments.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape().isRequired),
};
