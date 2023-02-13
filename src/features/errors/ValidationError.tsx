import { Message } from "semantic-ui-react";

interface Props {
  errors: any;
}

const ValidationError = ({ errors }: Props) => {
  return (
    <Message error>
      {console.log("errors", errors)}
      {errors && (
        <Message.List>
          {errors.map((err: any, i: any) => {
            return <Message.Item key={i}>{err}</Message.Item>;
          })}
        </Message.List>
      )}
    </Message>
  );
};

export default ValidationError;
