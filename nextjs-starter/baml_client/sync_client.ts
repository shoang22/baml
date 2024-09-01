/*************************************************************************************************

Welcome to Baml! To use this generated code, please run one of the following:

$ npm install @boundaryml/baml
$ yarn add @boundaryml/baml
$ pnpm add @boundaryml/baml

*************************************************************************************************/

// This file was generated by BAML: do not edit it. Instead, edit the BAML
// files and re-generate this code.
//
// tslint:disable
// @ts-nocheck
// biome-ignore format: autogenerated code
/* eslint-disable */
import { BamlRuntime, FunctionResult, BamlCtxManager, BamlSyncStream, Image, ClientRegistry } from "@boundaryml/baml"
import { Answer, BookAnalysis, CharacterDescription, Citation, Context, Document, Education, Experience, Ingredient, Message, PartIngredient, PartSteps, Person, PopularityOverTime, Ranking, Recipe, Reply, Resume, Score, Spells, Tweet, WordCount, Category, ReplyType, Role } from "./types"
import TypeBuilder from "./type_builder"
import { DO_NOT_USE_DIRECTLY_UNLESS_YOU_KNOW_WHAT_YOURE_DOING_CTX, DO_NOT_USE_DIRECTLY_UNLESS_YOU_KNOW_WHAT_YOURE_DOING_RUNTIME } from "./globals"

export type RecursivePartialNull<T> = T extends object
  ? {
    [P in keyof T]?: RecursivePartialNull<T[P]>;
  }
  : T | null;

export class BamlSyncClient {
  private runtime: BamlRuntime
  private ctx_manager: BamlCtxManager

  constructor(private runtime: BamlRuntime, private ctx_manager: BamlCtxManager) { }

  /*
  * @deprecated NOT IMPLEMENTED as streaming must by async. We
  * are not providing an async version as we want to reserve the
  * right to provide a sync version in the future.
  */
  get stream() {
    throw new Error("stream is not available in BamlSyncClient. Use `import { b } from 'baml_client/async_client")
  }


  AnalyzeBooks(
    input: string,
    __baml_options__?: { tb?: TypeBuilder, clientRegistry?: ClientRegistry }
  ): BookAnalysis {
    const raw = this.runtime.callFunctionSync(
      "AnalyzeBooks",
      {
        "input": input
      },
      this.ctx_manager.cloneContext(),
      __baml_options__?.tb?.__tb(),
      __baml_options__?.clientRegistry,
    )
    return raw.parsed() as BookAnalysis
  }

  AnswerQuestion(
    question: string, context: Context,
    __baml_options__?: { tb?: TypeBuilder, clientRegistry?: ClientRegistry }
  ): Answer {
    const raw = this.runtime.callFunctionSync(
      "AnswerQuestion",
      {
        "question": question, "context": context
      },
      this.ctx_manager.cloneContext(),
      __baml_options__?.tb?.__tb(),
      __baml_options__?.clientRegistry,
    )
    return raw.parsed() as Answer
  }

  ClassifyMessage(
    convo: Message[],
    __baml_options__?: { tb?: TypeBuilder, clientRegistry?: ClientRegistry }
  ): Category[] {
    const raw = this.runtime.callFunctionSync(
      "ClassifyMessage",
      {
        "convo": convo
      },
      this.ctx_manager.cloneContext(),
      __baml_options__?.tb?.__tb(),
      __baml_options__?.clientRegistry,
    )
    return raw.parsed() as Category[]
  }

  DescribeCharacter(
    first_image: Image,
    __baml_options__?: { tb?: TypeBuilder, clientRegistry?: ClientRegistry }
  ): CharacterDescription {
    const raw = this.runtime.callFunctionSync(
      "DescribeCharacter",
      {
        "first_image": first_image
      },
      this.ctx_manager.cloneContext(),
      __baml_options__?.tb?.__tb(),
      __baml_options__?.clientRegistry,
    )
    return raw.parsed() as CharacterDescription
  }

  ExtractPerson(
    input: string,
    __baml_options__?: { tb?: TypeBuilder, clientRegistry?: ClientRegistry }
  ): Person {
    const raw = this.runtime.callFunctionSync(
      "ExtractPerson",
      {
        "input": input
      },
      this.ctx_manager.cloneContext(),
      __baml_options__?.tb?.__tb(),
      __baml_options__?.clientRegistry,
    )
    return raw.parsed() as Person
  }

  ExtractResume(
    raw_text: string,
    __baml_options__?: { tb?: TypeBuilder, clientRegistry?: ClientRegistry }
  ): Resume {
    console.log("this", this);
    const raw = this.runtime.callFunctionSync(
      "ExtractResume",
      {
        "raw_text": raw_text
      },
      this.ctx_manager.cloneContext(),
      __baml_options__?.tb?.__tb(),
      __baml_options__?.clientRegistry,
    )
    return raw.parsed() as Resume
  }

  ExtractResumeNoStructure(
    raw_text: string,
    __baml_options__?: { tb?: TypeBuilder, clientRegistry?: ClientRegistry }
  ): string {
    const raw = this.runtime.callFunctionSync(
      "ExtractResumeNoStructure",
      {
        "raw_text": raw_text
      },
      this.ctx_manager.cloneContext(),
      __baml_options__?.tb?.__tb(),
      __baml_options__?.clientRegistry,
    )
    return raw.parsed() as string
  }

  GenerateReplies(
    tweets: Tweet[],
    __baml_options__?: { tb?: TypeBuilder, clientRegistry?: ClientRegistry }
  ): Reply[] {
    const raw = this.runtime.callFunctionSync(
      "GenerateReplies",
      {
        "tweets": tweets
      },
      this.ctx_manager.cloneContext(),
      __baml_options__?.tb?.__tb(),
      __baml_options__?.clientRegistry,
    )
    return raw.parsed() as Reply[]
  }

  GetRecipe(
    arg: string,
    __baml_options__?: { tb?: TypeBuilder, clientRegistry?: ClientRegistry }
  ): Recipe {
    const raw = this.runtime.callFunctionSync(
      "GetRecipe",
      {
        "arg": arg
      },
      this.ctx_manager.cloneContext(),
      __baml_options__?.tb?.__tb(),
      __baml_options__?.clientRegistry,
    )
    return raw.parsed() as Recipe
  }

}

export const b = new BamlSyncClient(DO_NOT_USE_DIRECTLY_UNLESS_YOU_KNOW_WHAT_YOURE_DOING_RUNTIME, DO_NOT_USE_DIRECTLY_UNLESS_YOU_KNOW_WHAT_YOURE_DOING_CTX)