import React, { FC } from "react";
import { montserratLight } from "../../css/snippets/fonts";
import styled from "styled-components";

const StyledText = styled.p`
  ${montserratLight}
`;

export const About: FC = () => (
  <>
    <h1>About J. Cont. Chem.</h1>
    <StyledText>
      J. Cont. Chem is a journal focused on challenging established consensus
      across all fields of chemistry. In science, there is an important balance
      between collaborative and adversarial efforts. It isour view that the
      collaborative aspect has come to dominate, such that scientists are
      reluctant to contradict each other. An academic field operating only by
      collaboration is not truly collaborative; individuals are still competing
      for prestige by publishing high-impact papers in important journals. When
      the competitive aspect of science is unacknowledged, it does not
      disappear, it becomes covert. Covert competition is inevitably based on
      politics and creates an unproductive environment. Taken to its logical
      extreme, research ends up being published to justify grants, rather than
      the other way around.
    </StyledText>
    <StyledText>
      In every field, papers are published that are widely recognized in an
      unspoken manner as being of poor quality and/or drawing incorrect
      conclusions. This creates a situation where there is both a public and a
      private knowledge of a problem or system. Consider something as simple as
      reproducing the results from a newly-published paper. Ideally, one would
      be able to simply read the experimental. In practice, experimental
      sections are always partially incomplete and results can generally only be
      reproduced with some amount of inside information.2,3 This is not
      necessarily caused by bad intentions. The reporting of certain procedures
      has a tendency to become informally standardized in such a way that
      important details are missing. We aim to bridge the gap between what is
      written in papers and what one grad student would say to another grad
      student in training, or between what a researcher would say in a private
      conversation about a paper and what the same researcher would write as a
      reviewer of that paper.
    </StyledText>
    <StyledText>
      The purpose of J. Cont. Chem. is not to generate controversy for the sake
      of controversy. The divide between public and private information raises
      barriers to entry and dilutes the quality of published research. We also
      believe that bad experimental design and/or conclusions should be noted,
      lest someone else waste time and resources pursuing a dead end. In short,
      we want to bring back the overtly competitive nature of science and
      channel it into advancing the field of chemistry as a whole.
    </StyledText>
    <StyledText>
      The secondary purpose of J. Cont. Chem. is to encourage cross-discipline
      learning. As demonstrated by Derek Lowe’s Things I Won’t Work With series
      for Science, chemistry can be written about in a way that is both
      informative and entertaining to outsiders. While an individual researcher
      does not spend a lot of time reading papers outside their discipline, we
      believe J. Cont. Chem. will provide an avenue for this to happen more
      frequently. We plan to give authors a wide berth on stylistic choices with
      their writing, and we encourage the use of a more conversational tone
      (without compromising precision in language). We believe that this
      practice will make it much easier for chemists to read about other fields.
      This is the purpose of our “voodoo” series, in which authors write about
      widely-used techniques that do not seem to have any rational basis but
      have been found to generate the most reliable results. We believe that our
      readers will enjoy learning about creative solutions that researchers in
      other fields deal with problems, some of which may have wider
      applications.
    </StyledText>
    <StyledText>
      We plan on offering a of flexibility to authors by not holding them to any
      word limits or rigid styles, but in general the articles in J. Cont. Chem.
      will take one of three forms:
    </StyledText>

    <h3>Full Articles</h3>
    <StyledText>
      Full articles will consist less of experimental results and more of
      authors challenging an established consensus. Very brief experimental
      results may be included to verify unprecedented statements, but are
      generally not required. This type of article is for authors who can make a
      compelling case that a large number of papers are misunderstanding the
      same system in the same way.
    </StyledText>
    <h3>Reviews</h3>
    <StyledText>
      Reviews are meant to superficially take the form of regular review
      articles, but with a focus on insider knowledge. Reviews in J. Cont. Chem.
      should be written in the way that one researcher might explain a field to
      another in a private conversation.
    </StyledText>
    <h3>Chemistry Voodoo</h3>
    <StyledText>
      There are a number of techniques, especially in the field of device
      fabrication, that some scientists colloquially describe as “voodoo”. Some
      examples:
    </StyledText>
    <ul>
      <li>
        <StyledText>
          Using a chemical from one supplier over another, even with the same
          nominal purity, can radically change the performance of certain
          devices.
        </StyledText>
      </li>
      <li>
        <StyledText>
          Some treatments of thin layers, such as annealing, can require a
          different approach in the summer due to humidity.
        </StyledText>
      </li>
      <li>
        <StyledText>
          Nanoparticles of a certain size distribution can only be produced if
          the fume hood sash is in a specific position.
        </StyledText>
      </li>
    </ul>
    <StyledText>
      These techniques are an example of private knowledge that has the
      potential to provide important information about the dynamics of a system.
    </StyledText>
  </>
);
