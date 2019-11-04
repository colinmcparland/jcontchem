import React, { FC } from "react";
import styled from "styled-components";
import { montserratLight, baskervilleBold } from "../../css/snippets/fonts";

const StyledText = styled.p`
  ${montserratLight}
`;

const TableContainer = styled.div`
  overflow: scroll;
  max-width: 100%;
`;

const StyledTable = styled.table`
  width: 100%;
  background-color: #fff;
  border: 1px solid #000;
  overflow: scroll;

  td,
  th {
    padding: 8px;

    &:first-child {
      border-right: 1px solid #000;
    }
  }

  th {
    ${baskervilleBold}
  }

  td {
    border-top: 1px solid #000;
  }
`;

const StyledCode = styled.pre`
  background-color: #fff;
  padding: 8px;
  border-radius: 3px;
  overflow: scroll;
`;
export const Contribute: FC = () => (
  <>
    <h1>Contributing</h1>
    <h3>Anonymous Authorship</h3>
    <StyledText>
      Given that the material published in J. Cont. Chem. may have the potential
      to negatively affect careers (especially of junior researchers), we will
      be offering anonymous authorship upon request. In these cases, the
      author’s name will be replaced with a salted SHA1 hash. The hash cannot be
      reverse-engineered, but can very rapidly be checked when provided with the
      key.
    </StyledText>
    <TableContainer>
      <StyledTable>
        <thead>
          <th>Input</th>
          <th>Output</th>
        </thead>
        <tbody>
          <tr>
            <td>Alice Jeffrey 8wEHSt</td>
            <td>88378A0A0EA84BF3F0E02E48C98508A2680AD376</td>
          </tr>
        </tbody>
      </StyledTable>
    </TableContainer>
    <StyledText>
      This output would be displayed publicly, which will allow authors to prove
      authorship at their own discretion. In cases where authors would like to
      remain anonymous even to the journal itself, we will allow submissions
      from unaffiliated e-mail addresses. In these cases, we will ask authors to
      provide us with the hash that replaces the author’s name.
    </StyledText>
    <h3>Generating SHA1 Keypair on Mac and Ubuntu Linux</h3>
    <StyledText>Open your Terminal and enter:</StyledText>
    <StyledCode>ssh-keygen -t rsa</StyledCode>
    <StyledText>Then you should see:</StyledText>
    <StyledCode>
      Generating public/private rsa key pair. Enter file in which to save the
      key (/home/demo/.ssh/id_rsa):
    </StyledCode>
    <StyledText>
      Now enter the location to save the key to. For example, to save the
      keypair to your desktop under the name &quot;jcontchem&quot;, enter
    </StyledText>
    <StyledCode>~/Desktop/jcontchem</StyledCode>
    <StyledText>Then you should see:</StyledText>
    <StyledCode>Enter passphrase (empty for no passphrase):</StyledCode>
    <StyledText>
      Leave this blank. Then you should see something like this:
    </StyledText>
    <StyledCode>
      Your identification has been saved in /home/demo/.ssh/id_rsa.
      <br />
      Your public key has been saved in /home/demo/.ssh/id_rsa.pub.
      <br />
      The key fingerprint is: ...
    </StyledCode>
    <StyledText>
      Now you should see jcontchem and jcontchem.pub in the location you chose
      earlier. In your submissions, please send us the .pub file and keep the
      other one as your secret key.
    </StyledText>
    <h3>Submission and Editorial Process</h3>
    <StyledText>
      Authors wishing to submit a manuscript should do so to
      submissions@jcontchem.org. We also invite authors to reach out prior to
      writing, to see if J. Cont. Chem. is the right fit for an idea. This
      process is not the same as peer review, so the revision process will more
      closely resemble the editing process at a newspaper than the more
      traditional peer review procedure. We encourage submissions from anyone at
      any level.
    </StyledText>
    <h3>Formatting</h3>
    <StyledText>
      This journal will not appear in print, so we will not be using two column
      format or require certain word counts. Each article will be published with
      J. Cont. Chem. formatting
    </StyledText>
  </>
);
