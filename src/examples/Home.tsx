/**
 * Exampleサイト ホーム
 */

import { Anchor } from "lib/components/Anchor";
import { Heading } from "lib/components/Heading";
import { Message } from "lib/components/Message";
import { OList, OListItem } from "lib/components/OList";
import { PageFooter, PageFooterItem } from "lib/components/PageFooter";
import { PageHeader, PageHeaderItem } from "lib/components/PageHeader";
import { UList, UListItem } from "lib/components/UList";
import { Footer } from "lib/layouts/Footer";
import { Header } from "lib/layouts/Header";
import { Page } from "lib/layouts/Page";
import { PageRoot } from "lib/layouts/PageRoot";
import { Component } from "lib/types";

/**
 * Exampleサイト ホーム
 */
export const Home: Component = () => {
  return (
    <PageRoot stretch>
      <Header>
        <PageHeader>
          <PageHeaderItem>
            <Anchor href="/">
              <img
                src="/images/logo.png"
                alt="ANDCORP"
                width="128"
                height="44"
              />
            </Anchor>
          </PageHeaderItem>
          <PageHeaderItem grow>
            <Anchor href="/">Top</Anchor>
            <Anchor href="/test">Test</Anchor>
          </PageHeaderItem>
          <PageHeaderItem>test2</PageHeaderItem>
        </PageHeader>
      </Header>
      <Page grow>
        <Heading level={1}>見出し1</Heading>
        <Heading level={2}>見出し2</Heading>
        <Heading level={3}>見出し3</Heading>
        <Heading level={4}>見出し4</Heading>
        <Heading level={5}>見出し5</Heading>
        <Heading level={6}>見出し6</Heading>
        <UList>
          <UListItem>リスト項目1</UListItem>
          <UListItem>
            リスト項目2
            <UList>
              <UListItem>リスト項目2.1</UListItem>
              <UListItem>リスト項目2.2</UListItem>
              <UListItem>リスト項目2.3</UListItem>
            </UList>
            <UList disc>
              <UListItem>リスト項目2.4</UListItem>
              <UListItem>リスト項目2.5</UListItem>
              <UListItem>
                リスト項目2.6
                <UList>
                  <UListItem>リスト項目2.6.1</UListItem>
                </UList>
              </UListItem>
            </UList>
          </UListItem>
          <UListItem>リスト項目3</UListItem>
        </UList>
        <UList horizontal>
          <UListItem>水平リスト項目1</UListItem>
          <UListItem>水平リスト項目2</UListItem>
          <UListItem>水平リスト項目3</UListItem>
        </UList>
        <OList>
          <OListItem>番号付きリスト項目1</OListItem>
          <OListItem>
            番号付きリスト項目2
            <OList>
              <OListItem>番号付きリスト項目2.1</OListItem>
              <OListItem>番号付きリスト項目2.2</OListItem>
              <OListItem>番号付きリスト項目2.3</OListItem>
            </OList>
          </OListItem>
          <OListItem>番号付きリスト項目3</OListItem>
        </OList>
        <Message>メッセージ表示</Message>
      </Page>
      <Footer>
        <PageFooter>
          <PageFooterItem grow>test1</PageFooterItem>
          <PageFooterItem>test2</PageFooterItem>
        </PageFooter>
      </Footer>
    </PageRoot>
  );
};
