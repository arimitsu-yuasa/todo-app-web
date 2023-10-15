import { Checkbox, Flex, Text } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";

const Task = (props) => {
  return (
    <Flex mb="16px" justifyContent="space-between" alignItems="center">
      <Checkbox
        isChecked={props.isDone}
        colorScheme="blue"
        size="lg"
        onChange={() => {
            props.toggleIsDone(props.id, props.index);
        }}
      >
        <Text>{props.name}</Text>
      </Checkbox>
    <CloseIcon onClick={() => props.destroyTask(props.id)} />
    </Flex>
    );
};

export default Task;