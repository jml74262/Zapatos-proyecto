/* eslint-disable prettier/prettier */
import { Request, Response } from 'express';
import BaseController from "./BaseControllers"

export default class DestinysController extends BaseControllers {
  public constructor() {
    super("./des")
  }
}