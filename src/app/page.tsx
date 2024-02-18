import OurProjects from "@/components/OurProjects/ourProjects";
import Header from "@/components/header";
import SubmitForm from "@/components/submitForm";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <OurProjects/>
     <SubmitForm/>
    </div>
  );
}
