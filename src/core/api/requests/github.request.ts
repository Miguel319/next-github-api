import { GitHubCommit } from "./../../interfaces/models";
import { http } from "../http";
import { GenericAbortSignal } from "axios";
import {
  GitHubBranch,
  GitHubRepository,
  GitHubUser,
} from "../../interfaces/models";
import { parseRequestError } from "../../utils";
import { HomeData } from "../../interfaces/state";

export class GitHubRequest {
  private static limit = "?limit=5";

  static async getUserInfo(
    user: string,
    signal?: GenericAbortSignal,
    lastFive = false
  ): Promise<GitHubUser> {
    try {
      const { data } = await http.get(
        `/${user}/user-info${lastFive ? this.limit : ""}`,
        {
          signal,
        }
      );

      return data;
    } catch (error) {
      throw parseRequestError(user);
    }
  }

  static async getRepositoriesFromUser(
    user: string,
    signal?: GenericAbortSignal,
    lastFive = false
  ): Promise<GitHubRepository[]> {
    try {
      const { data } = await http.get(
        `/${user}/repositories${lastFive ? this.limit : ""}`,
        {
          signal,
        }
      );

      return data;
    } catch (error) {
      throw parseRequestError(user);
    }
  }

  static async getBranchesFromRepository(
    user: string,
    repository: string,
    signal?: GenericAbortSignal,
    lastFive = false
  ): Promise<GitHubBranch[]> {
    try {
      const { data } = await http.get(
        `/${user}/repositories/${repository}/branches${
          lastFive ? this.limit : ""
        }`,
        { signal }
      );

      return data;
    } catch (error) {
      throw parseRequestError(user);
    }
  }

  static async getCommitsFromRepository(
    user: string,
    repository: string,
    signal?: GenericAbortSignal,
    lastFive = false
  ): Promise<GitHubCommit[]> {
    try {
      const { data } = await http.get(
        `/${user}/repositories/${repository}/commits${
          lastFive ? this.limit : ""
        }`,
        { signal }
      );

      return data;
    } catch (error) {
      throw parseRequestError(user);
    }
  }

  static async getLastFiveDataPieces(
    user: string,
    repository: string,
    signal?: GenericAbortSignal
  ): Promise<HomeData> {
    const [userInfo, repositories, commits] = await Promise.all([
      this.getUserInfo(user, signal, true),
      this.getRepositoriesFromUser(user, signal, true),
      this.getCommitsFromRepository(user, repository, signal, true),
    ]);

    return {
      userInfo,
      repositories,
      commits,
    };
  }
}
