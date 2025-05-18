#!/usr/bin/env node
import { Program } from "../core/program";

console.clear();
const program = new Program();
program.initProgram().parse(process.argv);
