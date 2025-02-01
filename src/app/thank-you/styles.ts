'use client'
import styled from "styled-components"

export const mainWrapper = styled.main`
  display: flex;
  justify-content: center; /* Centers horizontally */
  align-items: center;     /* Centers vertically */
  height: 100vh;
  flex-direction: column;
  max-width: 500px;
  margin: auto;
  gap: 15px;
  text-align: center;
`
export const ContentForm = styled.p`
  font-weight: bold;
  margin-bottom: 30px;
`