import Student from "./Student";
import { faker } from "@faker-js/faker";
import StudentReview from "./StudentReview";
export default function MainBody() {
  const New = "APP IDAN";
  return (
    <div style={{ minHeight: "7vh" }}>
      <p>
        The name of the app is:
        <br />
        {New}
      </p>
      <ul>
        <li> One </li>
        <li> Two </li>
      </ul>
      <div>
        <span> Students List </span>
        <Student
          fullName="Idan Buchnik"
          programmingTime={5}
          headshot={faker.image.avatar()}
        >
          <StudentReview />
        </Student>
        <Student
          fullName="Sapir Buchnik"
          programmingTime={1}
          headshot={faker.image.avatar()}
        >
          <StudentReview />
        </Student>
      </div>
    </div>
  );
}
