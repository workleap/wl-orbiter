import { BlueOrigin, Nasa, SpaceX } from "./assets";
import { Button } from "@react-components/button";
import { Card } from "@react-components/card";
import { Content } from "@react-components/placeholders";
import { Heading } from "@react-components/heading";
import { Illustration } from "@react-components/illustration";
import { Image } from "@react-components/image";
import { Modal } from "@react-components/dialog";
import { Paragraph } from "@react-components/paragraph";
import { Text } from "@react-components/text";
import { storiesOfBuilder } from "@stories/utils";

function stories(segment) {
    return storiesOfBuilder(module, "Chromatic/Modal")
        .segment(segment)
        .build();
}

/*
TRIGGER JEST TESTS:
- pass dismissable to both trigger & dialog
*/

stories()
    .add("default", () =>
        <Modal>
            <Heading>Iconic Arecibo Observatory collapses</Heading>
            <Content>
                <Paragraph>This year, the National Science Foundation (NSF) said farewell to the iconic Arecibo Observatory in Puerto Rico after two major cable failures led to the radio telescope's collapse. The 57-year old structure was once the largest radio dish telescope in the world, and researchers have used its capabilities to make significant breakthroughs in astronomy. The Arecibo Observatory also served as the dramatic backdrop to films like "Contact" and "Goldeneye."</Paragraph>
                <Paragraph>The facility suffered two cable failures this year, and then in early December, the suspended platform above the radio dish came crashing down.</Paragraph>
                <Paragraph>The news about Arecibo's structural damage and subsequent decommissioning was disheartening for the local community, too. Field trips to its visitors' center are a ''rite of passage'' for Puerto Rican children.</Paragraph>
            </Content>
        </Modal>
    )
    .add("illustration", () =>
        <Modal>
            <Illustration>
                <Image src={Nasa} alt="NASA" width="200px" />
            </Illustration>
            <Heading>Iconic Arecibo Observatory collapses</Heading>
            <Content>
                <Paragraph>This year, the National Science Foundation (NSF) said farewell to the iconic Arecibo Observatory in Puerto Rico after two major cable failures led to the radio telescope's collapse. The 57-year old structure was once the largest radio dish telescope in the world, and researchers have used its capabilities to make significant breakthroughs in astronomy. The Arecibo Observatory also served as the dramatic backdrop to films like "Contact" and "Goldeneye."</Paragraph>
                <Paragraph>The facility suffered two cable failures this year, and then in early December, the suspended platform above the radio dish came crashing down.</Paragraph>
                <Paragraph>The news about Arecibo's structural damage and subsequent decommissioning was disheartening for the local community, too. Field trips to its visitors' center are a ''rite of passage'' for Puerto Rican children.</Paragraph>
            </Content>
        </Modal>
    )
    .add("choice", () =>
        <Modal>
            <Heading>Space agencies</Heading>
            <Content>
                <Card>
                    <Image src={SpaceX} alt="SpaceX" width="149px" />
                    <Heading>Space X</Heading>
                    <Content> It's about believing in the future and thinking that the future will be better than the past.</Content>
                    <Button>Choose</Button>
                </Card>
                <Card>
                    <Image src={BlueOrigin} alt="Blue Origin" width="149px" />
                    <Heading>Blue Origin</Heading>
                    <Content>We're committed to building a road to space so our children can build the future.</Content>
                    <Button>Choose</Button>
                </Card>
            </Content>
        </Modal>
    )
    .add("choice with text", () =>
        <Modal>
            <Heading>Space agencies</Heading>
            <Content>
                <Text>Which of the following space agency do you prefer?</Text>
                <Card>
                    <Image src={SpaceX} alt="SpaceX" width="149px" />
                    <Heading>Space X</Heading>
                    <Content>It's about believing in the future and thinking that the future will be better than the past.</Content>
                    <Button>Choose</Button>
                </Card>
                <Card>
                    <Image src={BlueOrigin} alt="Blue Origin" width="149px" />
                    <Heading>Blue Origin</Heading>
                    <Content>We're committed to building a road to space so our children can build the future.</Content>
                    <Button>Choose</Button>
                </Card>
            </Content>
        </Modal>
    )
    .add("choice with content between cards", () =>
        <Modal>
            <Heading>Space agencies</Heading>
            <Content>
                <Text>Which of the following space agency do you prefer?</Text>
                <Card>
                    <Image src={SpaceX} alt="SpaceX" width="149px" />
                    <Heading>Space X</Heading>
                    <Content>It's about believing in the future and thinking that the future will be better than the past.</Content>
                    <Button>Choose</Button>
                </Card>
                <Text>Thank you for participating.</Text>
                <Card>
                    <Image src={BlueOrigin} alt="Blue Origin" width="149px" />
                    <Heading>Blue Origin</Heading>
                    <Content>We're committed to building a road to space so our children can build the future.</Content>
                    <Button>Choose</Button>
                </Card>
            </Content>
        </Modal>
    );
