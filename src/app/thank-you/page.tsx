'use client'
import Image from "next/image";
import { useRouter } from 'next/navigation';
import { ButtomCustom } from "@/components/ButtomCustom";
import { fileIcon } from "@/images";
import * as S from "./styles";

export default function ThankYou() {
  const router = useRouter()
  return (
    <S.mainWrapper>
      <Image src={fileIcon} alt="Icon File" style={{ width: '50px', height: '60px'}}/>
      <h1>Thank You</h1>
      <S.ContentForm>
        Your information was submitted to our team of immigration attorneys. Expect an email from hello@tryalma.ai.
      </S.ContentForm>
      <ButtomCustom sx={{ paddingLeft: '80px', paddingRight: '80px' }} type="button" onClick={() => router.push('assessment-form')}>Go back to Homepage</ButtomCustom>
    </S.mainWrapper>
  );
}
