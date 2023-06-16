import Wrapper from "@/components/Wrapper";
import { prisma } from "@/utils/prisma";
import Books from "../components/Books";
import Cookies from "js-cookie";
import { HStack } from "@chakra-ui/react";

export default function Homepage(props) {
  return (
    <Wrapper>
      <HStack>
      {props?.books?.map((book) => (
        <Books key={`${book.id} ${book.title}`} {...book} />
      ))}
      </HStack>
    </Wrapper>
  );
}

// server side props ( fetch in server )

export async function getServerSideProps() {
  try {
    const books = await prisma.book.findMany({
      orderBy: {
        title: "asc",
      },
    });
    return {
      props: {
        books,
      },
    }
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: "Something went wrong" });
  }
  
}
