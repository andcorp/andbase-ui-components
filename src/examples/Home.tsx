/**
 * Exampleサイト ホーム
 */

import React from "react";

import { Anchor } from "lib/components/Anchor";
import { Button } from "lib/components/Button";
import { ButtonGroup } from "lib/components/ButtonGroup";
import { FormBlock, FormBlockItem } from "lib/components/FormBlock";
import { Heading } from "lib/components/Heading";
import { Input } from "lib/components/Input";
import { Label } from "lib/components/Label";
import { Message } from "lib/components/Message";
import { NavList } from "lib/components/NavList";
import { OList, OListItem } from "lib/components/OList";
import { PageFooter, PageFooterItem } from "lib/components/PageFooter";
import { PageHeader, PageHeaderItem } from "lib/components/PageHeader";
import { Radio } from "lib/components/Radio";
import { TextArea } from "lib/components/Textarea";
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
            <NavList>
              <Anchor href="/">Top</Anchor>
              <Anchor href="/test">Test</Anchor>
            </NavList>
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
        <Message themeColor="recommend">推奨メッセージ</Message>
        <Message themeColor="review">確認メッセージ</Message>
        <Message themeColor="fresh">更新メッセージ</Message>
        <Message themeColor="warning">警告メッセージ</Message>
        <Message themeColor="danger">危険メッセージ</Message>
        <ButtonGroup>
          <Button>デフォルトボタン</Button>
          <Button themeColor="recommend">デフォルトボタン</Button>
          <Button themeColor="review">確認ボタン</Button>
          <Button themeColor="fresh">更新ボタン</Button>
          <Button themeColor="warning">警告ボタン</Button>
          <Button themeColor="danger">危険ボタン</Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button disabled>デフォルトボタン</Button>
          <Button themeColor="recommend" disabled>
            デフォルトボタン
          </Button>
          <Button themeColor="review" disabled>
            確認ボタン
          </Button>
          <Button themeColor="fresh" disabled>
            更新ボタン
          </Button>
          <Button themeColor="warning" disabled>
            警告ボタン
          </Button>
          <Button themeColor="danger" disabled>
            危険ボタン
          </Button>
        </ButtonGroup>
        <FormBlock grid>
          <Label>テキスト</Label>
          <Input autoFocus placeholder="テスト入力" />
          <Label>パスワード</Label>
          <Input type="password" placeholder="テスト入力" />
          <Label>日付</Label>
          <Input type="date" placeholder="テスト入力" />
          <Label>月</Label>
          <Input type="month" placeholder="テスト入力" />
          <Label>週</Label>
          <Input type="week" placeholder="テスト入力" />
          <Label>日時</Label>
          <Input type="datetime-local" placeholder="テスト入力" />
          <Label>読み取り専用</Label>
          <Input value="読み取り専用" readOnly />
          <Label>無効</Label>
          <Input value="無効" disabled />
          <Label>パターン</Label>
          <Input type="text" pattern="[0-9]" required />
          <Label>テキストエリア</Label>
          <TextArea placeholder="テキストエリア" />
          <Label>ラジオボタン</Label>
          <ButtonGroup>
            <span>
              <Radio name="radio" value="value1" id="radio-value1" />
              <Label htmlFor="radio-value1">ラジオ1</Label>
            </span>
            <span>
              <Radio name="radio" value="value2" id="radio-value2" />
              <Label htmlFor="radio-value2">ラジオ2</Label>
            </span>
            <span>
              <Radio name="radio" value="value3" id="radio-value3" />
              <Label htmlFor="radio-value3">ラジオ3</Label>
            </span>
          </ButtonGroup>
        </FormBlock>
        <FormBlock>
          <FormBlockItem>
            <div>
              <Label>テキスト</Label>
            </div>
            <div>
              <Input autoFocus placeholder="テスト入力" />
            </div>
          </FormBlockItem>
        </FormBlock>
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
