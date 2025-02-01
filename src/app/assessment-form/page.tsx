import * as S from "./styles";
import { FormAssessment } from "@/components/FormAssessment";

export default function Home() {
  return (
    <main>
      <S.HeaderForm>
        <S.Logo src="/logo.png" alt="Logo Alma" />
        <S.TitleHeader>Get An Assessment Of Your Imigration Case</S.TitleHeader>
      </S.HeaderForm>
      <S.ContentForm>
        <FormAssessment />
      </S.ContentForm>
    </main>
  );
}
