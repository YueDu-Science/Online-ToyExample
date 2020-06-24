/************************* 
 * Standardprotocol Test *
 *************************/

import { PsychoJS } from './lib/core-2020.1.js';
import * as core from './lib/core-2020.1.js';
import { TrialHandler } from './lib/data-2020.1.js';
import { Scheduler } from './lib/util-2020.1.js';
import * as util from './lib/util-2020.1.js';
import * as visual from './lib/visual-2020.1.js';
import * as sound from './lib/sound-2020.1.js';

Array.prototype.append = [].push

function permute(permutation) {
  var length = permutation.length,
      result = [permutation.slice()],
      c = new Array(length).fill(0),
      i = 1, k, p;

  while (i < length) {
    if (c[i] < i) {
      k = i % 2 && c[i];
      p = permutation[i];
      permutation[i] = permutation[k];
      permutation[k] = p;
      ++c[i];
      i = 1;
      result.push(permutation.slice());
    } else {
      c[i] = 0;
      ++i;
    }
  }
  return result;
}
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([(- 1), (- 1), (- 1)]),
  units: 'height',
  waitBlanking: true
});

// store info about the experiment session:
let expName = 'StandardProtocol';  // from the Builder filename that created this script
let expInfo = {'participant': '', 'day': '1'};

// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
const stim_elementsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(stim_elementsLoopBegin, stim_elementsLoopScheduler);
flowScheduler.add(stim_elementsLoopScheduler);
flowScheduler.add(stim_elementsLoopEnd);
flowScheduler.add(Instr_OVERALLRoutineBegin());
flowScheduler.add(Instr_OVERALLRoutineEachFrame());
flowScheduler.add(Instr_OVERALLRoutineEnd());
flowScheduler.add(Creat_HAND_RT_StimSeqRoutineBegin());
flowScheduler.add(Creat_HAND_RT_StimSeqRoutineEachFrame());
flowScheduler.add(Creat_HAND_RT_StimSeqRoutineEnd());
flowScheduler.add(Instr_HAND_RTRoutineBegin());
flowScheduler.add(Instr_HAND_RTRoutineEachFrame());
flowScheduler.add(Instr_HAND_RTRoutineEnd());
const HAND_RT_trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(HAND_RT_trialsLoopBegin, HAND_RT_trialsLoopScheduler);
flowScheduler.add(HAND_RT_trialsLoopScheduler);
flowScheduler.add(HAND_RT_trialsLoopEnd);
flowScheduler.add(Instr_HAND_TRRoutineBegin());
flowScheduler.add(Instr_HAND_TRRoutineEachFrame());
flowScheduler.add(Instr_HAND_TRRoutineEnd());
flowScheduler.add(Creat_HAND_TR_StimSeqRoutineBegin());
flowScheduler.add(Creat_HAND_TR_StimSeqRoutineEachFrame());
flowScheduler.add(Creat_HAND_TR_StimSeqRoutineEnd());
const HAND_TR_trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(HAND_TR_trialsLoopBegin, HAND_TR_trialsLoopScheduler);
flowScheduler.add(HAND_TR_trialsLoopScheduler);
flowScheduler.add(HAND_TR_trialsLoopEnd);
flowScheduler.add(Creat_CR_old_StimSeqRoutineBegin());
flowScheduler.add(Creat_CR_old_StimSeqRoutineEachFrame());
flowScheduler.add(Creat_CR_old_StimSeqRoutineEnd());
flowScheduler.add(Instr_CR_oldRoutineBegin());
flowScheduler.add(Instr_CR_oldRoutineEachFrame());
flowScheduler.add(Instr_CR_oldRoutineEnd());
const CR_old_trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(CR_old_trialsLoopBegin, CR_old_trialsLoopScheduler);
flowScheduler.add(CR_old_trialsLoopScheduler);
flowScheduler.add(CR_old_trialsLoopEnd);
flowScheduler.add(Instr_RTRoutineBegin());
flowScheduler.add(Instr_RTRoutineEachFrame());
flowScheduler.add(Instr_RTRoutineEnd());
flowScheduler.add(Creat_RT_StimSeqRoutineBegin());
flowScheduler.add(Creat_RT_StimSeqRoutineEachFrame());
flowScheduler.add(Creat_RT_StimSeqRoutineEnd());
const RT_trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(RT_trialsLoopBegin, RT_trialsLoopScheduler);
flowScheduler.add(RT_trialsLoopScheduler);
flowScheduler.add(RT_trialsLoopEnd);
flowScheduler.add(Creat_CR_new_StimSeqRoutineBegin());
flowScheduler.add(Creat_CR_new_StimSeqRoutineEachFrame());
flowScheduler.add(Creat_CR_new_StimSeqRoutineEnd());
flowScheduler.add(Instr_CR_newRoutineBegin());
flowScheduler.add(Instr_CR_newRoutineEachFrame());
flowScheduler.add(Instr_CR_newRoutineEnd());
const CR_new_trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(CR_new_trialsLoopBegin, CR_new_trialsLoopScheduler);
flowScheduler.add(CR_new_trialsLoopScheduler);
flowScheduler.add(CR_new_trialsLoopEnd);
flowScheduler.add(Instr_TRRoutineBegin());
flowScheduler.add(Instr_TRRoutineEachFrame());
flowScheduler.add(Instr_TRRoutineEnd());
flowScheduler.add(Creat_TR__new_StimSeqRoutineBegin());
flowScheduler.add(Creat_TR__new_StimSeqRoutineEachFrame());
flowScheduler.add(Creat_TR__new_StimSeqRoutineEnd());
const TR_new_trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(TR_new_trialsLoopBegin, TR_new_trialsLoopScheduler);
flowScheduler.add(TR_new_trialsLoopScheduler);
flowScheduler.add(TR_new_trialsLoopEnd);
flowScheduler.add(Thank_youRoutineBegin());
flowScheduler.add(Thank_youRoutineEachFrame());
flowScheduler.add(Thank_youRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    {'name': 'media/dnnb.png', 'path': './media/dnnb.png'},
    {'name': 'media/dinb.png', 'path': './media/dinb.png'},
    {'name': 'media/dinb_g.png', 'path': './media/dinb_g.png'},
    {'name': 'media/hand.png', 'path': './media/hand.png'},
    {'name': 'media/dinb_r.png', 'path': './media/dinb_r.png'},
    {'name': 'media/ddnb_g.png', 'path': './media/ddnb_g.png'},
    {'name': 'media/ddnb.png', 'path': './media/ddnb.png'},
    {'name': 'media/dnnb_r.png', 'path': './media/dnnb_r.png'},
    {'name': 'conditions.xlsx', 'path': './conditions.xlsx'},
    {'name': 'media/djnb.png', 'path': './media/djnb.png'},
    {'name': 'media/dnnb_g.png', 'path': './media/dnnb_g.png'},
    {'name': 'media/djnb_r.png', 'path': './media/djnb_r.png'},
    {'name': 'media/ddnb_r.png', 'path': './media/ddnb_r.png'},
    {'name': 'media/djnb_g.png', 'path': './media/djnb_g.png'}
  ]
});


var frameDur;
function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2020.1.3';
  expInfo['OS'] = window.navigator.platform;

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  
  return Scheduler.Event.NEXT;
}


var Load_StimClock;
var circle_frame_color;
var circle_frame_opacity;
var Instr_OVERALLClock;
var Instr_Overall_text;
var Instr_Overall_press;
var Creat_HAND_RT_StimSeqClock;
var StimList;
var hand_shape;
var x;
var y;
var finger;
var HAND_RT_X_seq;
var HAND_RT_Y_seq;
var HAND_RT_Finger_seq;
var stim_key;
var num_pos;
var HAND_RT_block;
var num_trials;
var HAND_RT_iter;
var Instr_HAND_RTClock;
var Instr_HAND_RT_text;
var Instr_HAND_RT_press;
var Load_HAND_RT_Stim_TrialsClock;
var HAND_RT_trials_count;
var HAND_RT_enter_trialsClock;
var hand_rt_circle_frame;
var HAND_RT_key_press;
var HAND_RT_hand;
var HAND_RT_stim;
var HAND_RT_feedbackClock;
var hand_rt_circle_frame_feedback;
var HAND_RT_hand_feedback;
var HAND_RT_stim_feedback;
var Instr_HAND_TRClock;
var instr_HAND_TR_text;
var Instr_HAND_TR_press;
var Creat_HAND_TR_StimSeqClock;
var HAND_TR_X_seq;
var HAND_TR_Y_seq;
var HAND_TR_Finger_seq;
var time_limit;
var HAND_TR_block;
var HAND_TR_iter;
var Instr_Hand_TR_blocksClock;
var Instr_Hand_TR_blocks_num;
var HAND_TR_blocks_key_resp;
var Load_HAND_TR_Stim_TrialsClock;
var HAND_TR_enter_trialsClock;
var timing_tol_early;
var timing_tol_late;
var TR_feedback_text;
var TR_penalty_text;
var HAND_TR_circle;
var hand_tr_circle_frame;
var HAND_TR_hand;
var HAND_TR_stim;
var HAND_TR_key_press;
var HAND_TR_feedbackClock;
var hand_tr_circle_frame_feedback;
var HAND_TR_hand_feedback;
var HAND_TR_stim_feedback;
var HAND_TR_feedback_text;
var HAND_TR_penaltyClock;
var hand_tr_circle_frame_penalty;
var TR_penalty_page;
var TR_Penalty_key_resp;
var HAND_TR_blocks_determineQuitClock;
var Creat_CR_old_StimSeqClock;
var CR_block;
var CR_iter;
var stim;
var image;
var image_r;
var image_g;
var CR_Stim_seq;
var CR_Finger_seq;
var CR_Image_seq;
var CR_Image_r_seq;
var CR_Image_g_seq;
var stim_key_perm;
var n_map;
var Instr_CR_oldClock;
var Instr_CR_old_text;
var Instr_CR_old_key_resp;
var CR_Load_Stim_TrialClock;
var CR_enter_trialClock;
var CR_circle_frame;
var CR_stim_image;
var CR_key_press;
var CR_old_feedbackClock;
var num_criterion;
var CR_old_feedback_circle;
var CR_old_feedback_image;
var Instr_RTClock;
var Instr_RT_text;
var Instr_RT_key_resp;
var Creat_RT_StimSeqClock;
var RT_block;
var RT_iter;
var RT_Stim_seq;
var RT_Finger_seq;
var RT_Image_seq;
var RT_Image_r_seq;
var RT_Image_g_seq;
var Instr_RT_blocksClock;
var Instr_RT_blocks_num;
var RT_blocks_key_resp;
var RT_Load_Stim_TrialsClock;
var RT_enter_trialsClock;
var RT_circle_frame;
var RT_stim_image;
var RT_key_press;
var RT_feedbackClock;
var RT_feedback_circle;
var RT_feedback_image;
var Creat_CR_new_StimSeqClock;
var finger_remap;
var Instr_CR_newClock;
var Instr_CR_new_text;
var Instr_CR_new_key_resp;
var CR_new_feedbackClock;
var CR_feedback_circle;
var CR_feedback_image;
var Instr_TRClock;
var instr_TR_text;
var Instr_TR_key_resp;
var Creat_TR__new_StimSeqClock;
var TR_block;
var TR_iter;
var TR_Stim_seq;
var TR_Finger_seq;
var TR_Image_seq;
var TR_Image_r_seq;
var TR_Image_g_seq;
var Instr_TR_blocksClock;
var Instr_TR_blocks_num;
var TR_blocks_key_resp;
var TR_Load_Stim_TrialsClock;
var TR_enter_trialsClock;
var TR_circle;
var TR_cicle_frame;
var TR_stim_image;
var TR_key_press;
var TR_feedbackClock;
var TR_feedback_circle;
var TR_feedback_image;
var TR_Feedback_text;
var TR_PenaltyClock;
var tr_circle_frame_penalty;
var TR_penalty_symbol;
var TR_Penalty_symbol_key_press;
var TR_after_trialsClock;
var Thank_youClock;
var ThankYou;
var ThankYouKey;
var globalClock;
var routineTimer;
function experimentInit() {
  // Initialize components for Routine "Load_Stim"
  Load_StimClock = new util.Clock();
  circle_frame_color = [1, 1, 1];
  circle_frame_opacity = 0.3;
  
  // Initialize components for Routine "Instr_OVERALL"
  Instr_OVERALLClock = new util.Clock();
  Instr_Overall_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'Instr_Overall_text',
    text: 'Thank you for willing to participate in our study where you need to:\n\nUse four fingers (index, middle, ring, little).\n\nPress four keys (h, u, i, l).\n\nThe entire study will take about 1 hour, there will be short recurring rest intervals.\n\nOnce you start, you cannot turn off the web browser until the completion.\n\n\nOnce you are ready to proceed, press the space key.\n\n\n\n\n\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  Instr_Overall_press = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Creat_HAND_RT_StimSeq"
  Creat_HAND_RT_StimSeqClock = new util.Clock();
  StimList = [];
  hand_shape = [];
  x = [];
  y = [];
  finger = [];
  HAND_RT_X_seq = [];
  HAND_RT_Y_seq = [];
  HAND_RT_Finger_seq = [];
  stim_key = [0, 1, 2, 3];
  num_pos = 4;
  HAND_RT_block = 1;
  num_trials = 5;
  HAND_RT_iter = (HAND_RT_block * num_trials);
  
  // Initialize components for Routine "Instr_HAND_RT"
  Instr_HAND_RTClock = new util.Clock();
  Instr_HAND_RT_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'Instr_HAND_RT_text',
    text: 'We will first perform three practice blocks.\n\nThey give you the opportunity to be familiar with our tasks.\n\nIn this upcoming block:\n\nAlways rest your index, middle, ring, and little fingers on four keys.\n\nThey are h, u, i, l.\n\nYou will see a hand shape on the screen. One finger (index, middle, ring, and little) will light up at a time.\n\nOnce you see it, press the corresponding finger as quickly and accurately as you can.\n\nPretty easy? press one of you finger to start the block.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  Instr_HAND_RT_press = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Load_HAND_RT_Stim_Trials"
  Load_HAND_RT_Stim_TrialsClock = new util.Clock();
  HAND_RT_trials_count = 0;
  
  // Initialize components for Routine "HAND_RT_enter_trials"
  HAND_RT_enter_trialsClock = new util.Clock();
  hand_rt_circle_frame = new visual.Polygon ({
    win: psychoJS.window, name: 'hand_rt_circle_frame', units : 'height', 
    edges: 60, size:[0.3, 0.3],
    ori: 0, pos: [0, 0],
    lineWidth: 10, lineColor: new util.Color(circle_frame_color),
    fillColor: new util.Color([(- 1), (- 1), (- 1)]),
    opacity: 0.5, depth: -1, interpolate: true,
  });
  
  HAND_RT_key_press = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  HAND_RT_hand = new visual.ImageStim({
    win : psychoJS.window,
    name : 'HAND_RT_hand', units : 'height', 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.25, 0.25],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -3.0 
  });
  HAND_RT_stim = new visual.Polygon ({
    win: psychoJS.window, name: 'HAND_RT_stim', units : 'height', 
    edges: 32, size:[0.025, 0.025],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -4, interpolate: true,
  });
  
  // Initialize components for Routine "HAND_RT_feedback"
  HAND_RT_feedbackClock = new util.Clock();
  hand_rt_circle_frame_feedback = new visual.Polygon ({
    win: psychoJS.window, name: 'hand_rt_circle_frame_feedback', units : 'height', 
    edges: 60, size:[0.3, 0.3],
    ori: 0, pos: [0, 0],
    lineWidth: 10, lineColor: new util.Color(circle_frame_color),
    fillColor: new util.Color([(- 1), (- 1), (- 1)]),
    opacity: 0.5, depth: 0, interpolate: true,
  });
  
  HAND_RT_hand_feedback = new visual.ImageStim({
    win : psychoJS.window,
    name : 'HAND_RT_hand_feedback', units : 'height', 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.25, 0.25],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -1.0 
  });
  HAND_RT_stim_feedback = new visual.Polygon ({
    win: psychoJS.window, name: 'HAND_RT_stim_feedback', units : 'height', 
    edges: 32, size:[0.025, 0.025],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color(1.0),
    fillColor: new util.Color(1.0),
    opacity: 1, depth: -2, interpolate: true,
  });
  
  // Initialize components for Routine "Instr_HAND_TR"
  Instr_HAND_TRClock = new util.Clock();
  instr_HAND_TR_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'instr_HAND_TR_text',
    text: 'You did a great job. \n\nIn the following block, there is only one difference:\n\nInstead of pressing a key as quickly as you can, now, you need to press a key when a moving ring overlaps the white circle.\n\nIn some cases where the finger lights up right before the moving ring touches the circle, you do not have anytime to think about which key to press, make a guess.\n\nIt is ok to make a guess.\n\nThere will be at least two blocks, more blocks may be needed if your timing accuracy < 70%.\n\nPress one of you finger to start the block.\n\n\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  Instr_HAND_TR_press = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Creat_HAND_TR_StimSeq"
  Creat_HAND_TR_StimSeqClock = new util.Clock();
  HAND_TR_X_seq = [];
  HAND_TR_Y_seq = [];
  HAND_TR_Finger_seq = [];
  time_limit = 1.8;
  HAND_TR_block = 5;
  HAND_TR_iter = (num_trials * HAND_TR_block);
  
  // Initialize components for Routine "Instr_Hand_TR_blocks"
  Instr_Hand_TR_blocksClock = new util.Clock();
  Instr_Hand_TR_blocks_num = new visual.TextStim({
    win: psychoJS.window,
    name: 'Instr_Hand_TR_blocks_num',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  HAND_TR_blocks_key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Load_HAND_TR_Stim_Trials"
  Load_HAND_TR_Stim_TrialsClock = new util.Clock();
  // Initialize components for Routine "HAND_TR_enter_trials"
  HAND_TR_enter_trialsClock = new util.Clock();
  timing_tol_early = 0.1;
  timing_tol_late = 0.075;
  TR_feedback_text = [];
  TR_penalty_text = [];
  
  HAND_TR_circle = new visual.Polygon ({
    win: psychoJS.window, name: 'HAND_TR_circle', units : 'height', 
    edges: 32, size:[1.0, 1.0],
    ori: 0, pos: [0, 0],
    lineWidth: 10, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([(- 1), (- 1), (- 1)]),
    opacity: 1, depth: -1, interpolate: true,
  });
  
  hand_tr_circle_frame = new visual.Polygon ({
    win: psychoJS.window, name: 'hand_tr_circle_frame', units : 'height', 
    edges: 60, size:[0.3, 0.3],
    ori: 0, pos: [0, 0],
    lineWidth: 10, lineColor: new util.Color(circle_frame_color),
    fillColor: new util.Color([(- 1), (- 1), (- 1)]),
    opacity: 0.5, depth: -2, interpolate: true,
  });
  
  HAND_TR_hand = new visual.ImageStim({
    win : psychoJS.window,
    name : 'HAND_TR_hand', units : 'height', 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.25, 0.25],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -3.0 
  });
  HAND_TR_stim = new visual.Polygon ({
    win: psychoJS.window, name: 'HAND_TR_stim', units : 'height', 
    edges: 32, size:[0.025, 0.025],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -4, interpolate: true,
  });
  
  HAND_TR_key_press = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "HAND_TR_feedback"
  HAND_TR_feedbackClock = new util.Clock();
  hand_tr_circle_frame_feedback = new visual.Polygon ({
    win: psychoJS.window, name: 'hand_tr_circle_frame_feedback', units : 'height', 
    edges: 60, size:[0.3, 0.3],
    ori: 0, pos: [0, 0],
    lineWidth: 10, lineColor: new util.Color(circle_frame_color),
    fillColor: new util.Color([(- 1), (- 1), (- 1)]),
    opacity: 0.5, depth: 0, interpolate: true,
  });
  
  HAND_TR_hand_feedback = new visual.ImageStim({
    win : psychoJS.window,
    name : 'HAND_TR_hand_feedback', units : 'height', 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.25, 0.25],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -1.0 
  });
  HAND_TR_stim_feedback = new visual.Polygon ({
    win: psychoJS.window, name: 'HAND_TR_stim_feedback', units : 'height', 
    edges: 32, size:[0.025, 0.025],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color(1.0),
    fillColor: new util.Color(1.0),
    opacity: 1, depth: -2, interpolate: true,
  });
  
  HAND_TR_feedback_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'HAND_TR_feedback_text',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.25], height: 0.08,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -3.0 
  });
  
  // Initialize components for Routine "HAND_TR_penalty"
  HAND_TR_penaltyClock = new util.Clock();
  hand_tr_circle_frame_penalty = new visual.Polygon ({
    win: psychoJS.window, name: 'hand_tr_circle_frame_penalty', 
    edges: 60, size:[0.3, 0.3],
    ori: 0, pos: [0, 0],
    lineWidth: 10, lineColor: new util.Color([(- 1), (- 1), (- 1)]),
    fillColor: new util.Color([(- 1), (- 1), (- 1)]),
    opacity: 1, depth: 0, interpolate: true,
  });
  
  TR_penalty_page = new visual.TextStim({
    win: psychoJS.window,
    name: 'TR_penalty_page',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  TR_Penalty_key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "HAND_TR_blocks_determineQuit"
  HAND_TR_blocks_determineQuitClock = new util.Clock();
  // Initialize components for Routine "Creat_CR_old_StimSeq"
  Creat_CR_old_StimSeqClock = new util.Clock();
     
  CR_block = 200;
  CR_iter = (CR_block * num_trials);
  stim = [];
  image = [];
  image_r = [];
  image_g = [];
  CR_Stim_seq = [];
  CR_Finger_seq = [];
  CR_Image_seq = [];
  CR_Image_r_seq = [];
  CR_Image_g_seq = [];
  stim_key_perm = permute(stim_key);
  n_map = stim_key_perm.length;
  
  // Initialize components for Routine "Instr_CR_old"
  Instr_CR_oldClock = new util.Clock();
  Instr_CR_old_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'Instr_CR_old_text',
    text: 'Congratulations! Now, we are going to do the real task.\n\nThere will be four symbols showing on the screen, one at a time.\nEach of them maps onto one key from (h,u,i,l).\n\nYour job is to figure out the map.\n\nThink before you press the key. \nThe accuracy is the priority, so go as slow as you need.\n\nThe more mistaks you make, the longer this block will be.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  Instr_CR_old_key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "CR_Load_Stim_Trial"
  CR_Load_Stim_TrialClock = new util.Clock();
  // Initialize components for Routine "CR_enter_trial"
  CR_enter_trialClock = new util.Clock();
  CR_circle_frame = new visual.Polygon ({
    win: psychoJS.window, name: 'CR_circle_frame', units : 'height', 
    edges: 60, size:[0.3, 0.3],
    ori: 0, pos: [0, 0],
    lineWidth: 10, lineColor: new util.Color(circle_frame_color),
    fillColor: new util.Color([(- 1), (- 1), (- 1)]),
    opacity: 0.5, depth: -1, interpolate: true,
  });
  
  CR_stim_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'CR_stim_image', units : 'height', 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.25, 0.25],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -2.0 
  });
  CR_key_press = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "CR_old_feedback"
  CR_old_feedbackClock = new util.Clock();
  num_criterion = 2;
  
  CR_old_feedback_circle = new visual.Polygon ({
    win: psychoJS.window, name: 'CR_old_feedback_circle', units : 'height', 
    edges: 60, size:[0.3, 0.3],
    ori: 0, pos: [0, 0],
    lineWidth: 10, lineColor: new util.Color(1.0),
    fillColor: new util.Color([(- 1), (- 1), (- 1)]),
    opacity: 0.5, depth: -1, interpolate: true,
  });
  
  CR_old_feedback_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'CR_old_feedback_image', units : 'height', 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.25, 0.25],
    color : new util.Color('white'), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -2.0 
  });
  // Initialize components for Routine "Instr_RT"
  Instr_RTClock = new util.Clock();
  Instr_RT_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'Instr_RT_text',
    text: 'Now, we are going to practice the symbol-key map you just learned.\n\nThere are 10 training blocks in total and between each two blocks, short rests are avalaible.\n\nIn each block, your job is to press the corresponding key as quickly and accurately as you can.\n\nWhenever you are ready, press any key to start.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  Instr_RT_key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Creat_RT_StimSeq"
  Creat_RT_StimSeqClock = new util.Clock();
  RT_block = 10;
  RT_iter = (RT_block * num_trials);
  RT_Stim_seq = [];
  RT_Finger_seq = [];
  RT_Image_seq = [];
  RT_Image_r_seq = [];
  RT_Image_g_seq = [];
  
  // Initialize components for Routine "Instr_RT_blocks"
  Instr_RT_blocksClock = new util.Clock();
  Instr_RT_blocks_num = new visual.TextStim({
    win: psychoJS.window,
    name: 'Instr_RT_blocks_num',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  RT_blocks_key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "RT_Load_Stim_Trials"
  RT_Load_Stim_TrialsClock = new util.Clock();
  // Initialize components for Routine "RT_enter_trials"
  RT_enter_trialsClock = new util.Clock();
  RT_circle_frame = new visual.Polygon ({
    win: psychoJS.window, name: 'RT_circle_frame', units : 'height', 
    edges: 60, size:[0.3, 0.3],
    ori: 0, pos: [0, 0],
    lineWidth: 10, lineColor: new util.Color(circle_frame_color),
    fillColor: new util.Color([(- 1), (- 1), (- 1)]),
    opacity: 0.5, depth: -1, interpolate: true,
  });
  
  RT_stim_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'RT_stim_image', units : 'height', 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.25, 0.25],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -2.0 
  });
  RT_key_press = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "RT_feedback"
  RT_feedbackClock = new util.Clock();
  RT_feedback_circle = new visual.Polygon ({
    win: psychoJS.window, name: 'RT_feedback_circle', units : 'height', 
    edges: 60, size:[0.3, 0.3],
    ori: 0, pos: [0, 0],
    lineWidth: 10, lineColor: new util.Color(1.0),
    fillColor: new util.Color([(- 1), (- 1), (- 1)]),
    opacity: 0.5, depth: -1, interpolate: true,
  });
  
  RT_feedback_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'RT_feedback_image', units : 'height', 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.25, 0.25],
    color : new util.Color('white'), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -2.0 
  });
  // Initialize components for Routine "Creat_CR_new_StimSeq"
  Creat_CR_new_StimSeqClock = new util.Clock();
  finger_remap = [];
  
  // Initialize components for Routine "Instr_CR_new"
  Instr_CR_newClock = new util.Clock();
  Instr_CR_new_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'Instr_CR_new_text',
    text: 'Now, we are going to learn a new symbol-key map.\n\nThe same four symbols will be shown on the screen, one at a time.\nEach of them maps onto one key from (h,u,i,l).\n\nYour job is to figure out the new map.\n\nThink before you press the key. \nThe accuracy is the priority, so go as slow as you need.\n\nThe more mistaks you make, the longer this block will be.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  Instr_CR_new_key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "CR_Load_Stim_Trial"
  CR_Load_Stim_TrialClock = new util.Clock();
  // Initialize components for Routine "CR_enter_trial"
  CR_enter_trialClock = new util.Clock();
  CR_circle_frame = new visual.Polygon ({
    win: psychoJS.window, name: 'CR_circle_frame', units : 'height', 
    edges: 60, size:[0.3, 0.3],
    ori: 0, pos: [0, 0],
    lineWidth: 10, lineColor: new util.Color(circle_frame_color),
    fillColor: new util.Color([(- 1), (- 1), (- 1)]),
    opacity: 0.5, depth: -1, interpolate: true,
  });
  
  CR_stim_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'CR_stim_image', units : 'height', 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.25, 0.25],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -2.0 
  });
  CR_key_press = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "CR_new_feedback"
  CR_new_feedbackClock = new util.Clock();
  num_criterion = 2;
  
  CR_feedback_circle = new visual.Polygon ({
    win: psychoJS.window, name: 'CR_feedback_circle', units : 'height', 
    edges: 60, size:[0.3, 0.3],
    ori: 0, pos: [0, 0],
    lineWidth: 10, lineColor: new util.Color(1.0),
    fillColor: new util.Color([(- 1), (- 1), (- 1)]),
    opacity: 0.5, depth: -1, interpolate: true,
  });
  
  CR_feedback_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'CR_feedback_image', units : 'height', 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.25, 0.25],
    color : new util.Color('white'), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -2.0 
  });
  // Initialize components for Routine "Instr_TR"
  Instr_TRClock = new util.Clock();
  instr_TR_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'instr_TR_text',
    text: 'In the final set of blocks, still use the symbol-key map you practiced previously.\n\nPress the corresponding key when the moving ring overlaps the while circle.\n\nRemember, the symbol may show up very late. In these cases, you do not have time to think about which key to press, make a guess.\n\nThis task is designed to be very hard, so it is ok to make a guess.\n\nThere will be five blocks in total.\n\nPress one of you finger to start the block.\n\n\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  Instr_TR_key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Creat_TR__new_StimSeq"
  Creat_TR__new_StimSeqClock = new util.Clock();
  TR_block = 5;
  TR_iter = (TR_block * num_trials);
  TR_Stim_seq = [];
  TR_Finger_seq = [];
  TR_Image_seq = [];
  TR_Image_r_seq = [];
  TR_Image_g_seq = [];
  
  // Initialize components for Routine "Instr_TR_blocks"
  Instr_TR_blocksClock = new util.Clock();
  Instr_TR_blocks_num = new visual.TextStim({
    win: psychoJS.window,
    name: 'Instr_TR_blocks_num',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  TR_blocks_key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "TR_Load_Stim_Trials"
  TR_Load_Stim_TrialsClock = new util.Clock();
  // Initialize components for Routine "TR_enter_trials"
  TR_enter_trialsClock = new util.Clock();
  TR_circle = new visual.Polygon ({
    win: psychoJS.window, name: 'TR_circle', units : 'height', 
    edges: 32, size:[1.0, 1.0],
    ori: 0, pos: [0, 0],
    lineWidth: 10, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([(- 1), (- 1), (- 1)]),
    opacity: 1, depth: -1, interpolate: true,
  });
  
  TR_cicle_frame = new visual.Polygon ({
    win: psychoJS.window, name: 'TR_cicle_frame', units : 'height', 
    edges: 60, size:[0.3, 0.3],
    ori: 0, pos: [0, 0],
    lineWidth: 10, lineColor: new util.Color(circle_frame_color),
    fillColor: new util.Color([(- 1), (- 1), (- 1)]),
    opacity: 0.5, depth: -2, interpolate: true,
  });
  
  TR_stim_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'TR_stim_image', units : 'height', 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.25, 0.25],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -3.0 
  });
  TR_key_press = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "TR_feedback"
  TR_feedbackClock = new util.Clock();
  TR_feedback_circle = new visual.Polygon ({
    win: psychoJS.window, name: 'TR_feedback_circle', units : 'height', 
    edges: 60, size:[0.3, 0.3],
    ori: 0, pos: [0, 0],
    lineWidth: 10, lineColor: new util.Color(1.0),
    fillColor: new util.Color([(- 1), (- 1), (- 1)]),
    opacity: 0.5, depth: 0, interpolate: true,
  });
  
  TR_feedback_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'TR_feedback_image', units : 'height', 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.25, 0.25],
    color : new util.Color('white'), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -1.0 
  });
  TR_Feedback_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'TR_Feedback_text',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.25], height: 0.08,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0 
  });
  
  // Initialize components for Routine "TR_Penalty"
  TR_PenaltyClock = new util.Clock();
  tr_circle_frame_penalty = new visual.Polygon ({
    win: psychoJS.window, name: 'tr_circle_frame_penalty', 
    edges: 60, size:[0.3, 0.3],
    ori: 0, pos: [0, 0],
    lineWidth: 10, lineColor: new util.Color([(- 1), (- 1), (- 1)]),
    fillColor: new util.Color([(- 1), (- 1), (- 1)]),
    opacity: 1, depth: 0, interpolate: true,
  });
  
  TR_penalty_symbol = new visual.TextStim({
    win: psychoJS.window,
    name: 'TR_penalty_symbol',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  TR_Penalty_symbol_key_press = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "TR_after_trials"
  TR_after_trialsClock = new util.Clock();
  // Initialize components for Routine "Thank_you"
  Thank_youClock = new util.Clock();
  ThankYou = new visual.TextStim({
    win: psychoJS.window,
    name: 'ThankYou',
    text: 'You did a great job, Thank you!\n\nPress "space" to finish.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  ThankYouKey = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var stim_elements;
var currentLoop;
function stim_elementsLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  stim_elements = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: TrialHandler.importConditions(psychoJS.serverManager, 'conditions.xlsx', '0:4'),
    seed: undefined, name: 'stim_elements'
  });
  psychoJS.experiment.addLoop(stim_elements); // add the loop to the experiment
  currentLoop = stim_elements;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisStim_element of stim_elements) {
    const snapshot = stim_elements.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(Load_StimRoutineBegin(snapshot));
    thisScheduler.add(Load_StimRoutineEachFrame(snapshot));
    thisScheduler.add(Load_StimRoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function stim_elementsLoopEnd() {
  psychoJS.experiment.removeLoop(stim_elements);

  return Scheduler.Event.NEXT;
}


var HAND_RT_trials;
function HAND_RT_trialsLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  HAND_RT_trials = new TrialHandler({
    psychoJS: psychoJS,
    nReps: HAND_RT_iter, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'HAND_RT_trials'
  });
  psychoJS.experiment.addLoop(HAND_RT_trials); // add the loop to the experiment
  currentLoop = HAND_RT_trials;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisHAND_RT_trial of HAND_RT_trials) {
    const snapshot = HAND_RT_trials.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(Load_HAND_RT_Stim_TrialsRoutineBegin(snapshot));
    thisScheduler.add(Load_HAND_RT_Stim_TrialsRoutineEachFrame(snapshot));
    thisScheduler.add(Load_HAND_RT_Stim_TrialsRoutineEnd(snapshot));
    thisScheduler.add(HAND_RT_enter_trialsRoutineBegin(snapshot));
    thisScheduler.add(HAND_RT_enter_trialsRoutineEachFrame(snapshot));
    thisScheduler.add(HAND_RT_enter_trialsRoutineEnd(snapshot));
    thisScheduler.add(HAND_RT_feedbackRoutineBegin(snapshot));
    thisScheduler.add(HAND_RT_feedbackRoutineEachFrame(snapshot));
    thisScheduler.add(HAND_RT_feedbackRoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function HAND_RT_trialsLoopEnd() {
  psychoJS.experiment.removeLoop(HAND_RT_trials);

  return Scheduler.Event.NEXT;
}


var HAND_TR_trials;
function HAND_TR_trialsLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  HAND_TR_trials = new TrialHandler({
    psychoJS: psychoJS,
    nReps: HAND_TR_iter, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'HAND_TR_trials'
  });
  psychoJS.experiment.addLoop(HAND_TR_trials); // add the loop to the experiment
  currentLoop = HAND_TR_trials;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisHAND_TR_trial of HAND_TR_trials) {
    const snapshot = HAND_TR_trials.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    const HAND_TR_show_blocksLoopScheduler = new Scheduler(psychoJS);
    thisScheduler.add(HAND_TR_show_blocksLoopBegin, HAND_TR_show_blocksLoopScheduler);
    thisScheduler.add(HAND_TR_show_blocksLoopScheduler);
    thisScheduler.add(HAND_TR_show_blocksLoopEnd);
    thisScheduler.add(Load_HAND_TR_Stim_TrialsRoutineBegin(snapshot));
    thisScheduler.add(Load_HAND_TR_Stim_TrialsRoutineEachFrame(snapshot));
    thisScheduler.add(Load_HAND_TR_Stim_TrialsRoutineEnd(snapshot));
    thisScheduler.add(HAND_TR_enter_trialsRoutineBegin(snapshot));
    thisScheduler.add(HAND_TR_enter_trialsRoutineEachFrame(snapshot));
    thisScheduler.add(HAND_TR_enter_trialsRoutineEnd(snapshot));
    const HAND_TR_feedback_loopLoopScheduler = new Scheduler(psychoJS);
    thisScheduler.add(HAND_TR_feedback_loopLoopBegin, HAND_TR_feedback_loopLoopScheduler);
    thisScheduler.add(HAND_TR_feedback_loopLoopScheduler);
    thisScheduler.add(HAND_TR_feedback_loopLoopEnd);
    const HAND_TR_penalty_loopLoopScheduler = new Scheduler(psychoJS);
    thisScheduler.add(HAND_TR_penalty_loopLoopBegin, HAND_TR_penalty_loopLoopScheduler);
    thisScheduler.add(HAND_TR_penalty_loopLoopScheduler);
    thisScheduler.add(HAND_TR_penalty_loopLoopEnd);
    thisScheduler.add(HAND_TR_blocks_determineQuitRoutineBegin(snapshot));
    thisScheduler.add(HAND_TR_blocks_determineQuitRoutineEachFrame(snapshot));
    thisScheduler.add(HAND_TR_blocks_determineQuitRoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


var HAND_TR_show_blocks;
function HAND_TR_show_blocksLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  HAND_TR_show_blocks = new TrialHandler({
    psychoJS: psychoJS,
    nReps: Hand_TR_show_blocks, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'HAND_TR_show_blocks'
  });
  psychoJS.experiment.addLoop(HAND_TR_show_blocks); // add the loop to the experiment
  currentLoop = HAND_TR_show_blocks;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisHAND_TR_show_block of HAND_TR_show_blocks) {
    const snapshot = HAND_TR_show_blocks.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(Instr_Hand_TR_blocksRoutineBegin(snapshot));
    thisScheduler.add(Instr_Hand_TR_blocksRoutineEachFrame(snapshot));
    thisScheduler.add(Instr_Hand_TR_blocksRoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function HAND_TR_show_blocksLoopEnd() {
  psychoJS.experiment.removeLoop(HAND_TR_show_blocks);

  return Scheduler.Event.NEXT;
}


var HAND_TR_feedback_loop;
function HAND_TR_feedback_loopLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  HAND_TR_feedback_loop = new TrialHandler({
    psychoJS: psychoJS,
    nReps: TR_feedback, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'HAND_TR_feedback_loop'
  });
  psychoJS.experiment.addLoop(HAND_TR_feedback_loop); // add the loop to the experiment
  currentLoop = HAND_TR_feedback_loop;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisHAND_TR_feedback_loop of HAND_TR_feedback_loop) {
    const snapshot = HAND_TR_feedback_loop.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(HAND_TR_feedbackRoutineBegin(snapshot));
    thisScheduler.add(HAND_TR_feedbackRoutineEachFrame(snapshot));
    thisScheduler.add(HAND_TR_feedbackRoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function HAND_TR_feedback_loopLoopEnd() {
  psychoJS.experiment.removeLoop(HAND_TR_feedback_loop);

  return Scheduler.Event.NEXT;
}


var HAND_TR_penalty_loop;
function HAND_TR_penalty_loopLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  HAND_TR_penalty_loop = new TrialHandler({
    psychoJS: psychoJS,
    nReps: TR_penalty, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'HAND_TR_penalty_loop'
  });
  psychoJS.experiment.addLoop(HAND_TR_penalty_loop); // add the loop to the experiment
  currentLoop = HAND_TR_penalty_loop;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisHAND_TR_penalty_loop of HAND_TR_penalty_loop) {
    const snapshot = HAND_TR_penalty_loop.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(HAND_TR_penaltyRoutineBegin(snapshot));
    thisScheduler.add(HAND_TR_penaltyRoutineEachFrame(snapshot));
    thisScheduler.add(HAND_TR_penaltyRoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function HAND_TR_penalty_loopLoopEnd() {
  psychoJS.experiment.removeLoop(HAND_TR_penalty_loop);

  return Scheduler.Event.NEXT;
}


function HAND_TR_trialsLoopEnd() {
  psychoJS.experiment.removeLoop(HAND_TR_trials);

  return Scheduler.Event.NEXT;
}


var CR_old_trials;
function CR_old_trialsLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  CR_old_trials = new TrialHandler({
    psychoJS: psychoJS,
    nReps: CR_iter, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'CR_old_trials'
  });
  psychoJS.experiment.addLoop(CR_old_trials); // add the loop to the experiment
  currentLoop = CR_old_trials;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisCR_old_trial of CR_old_trials) {
    const snapshot = CR_old_trials.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(CR_Load_Stim_TrialRoutineBegin(snapshot));
    thisScheduler.add(CR_Load_Stim_TrialRoutineEachFrame(snapshot));
    thisScheduler.add(CR_Load_Stim_TrialRoutineEnd(snapshot));
    thisScheduler.add(CR_enter_trialRoutineBegin(snapshot));
    thisScheduler.add(CR_enter_trialRoutineEachFrame(snapshot));
    thisScheduler.add(CR_enter_trialRoutineEnd(snapshot));
    thisScheduler.add(CR_old_feedbackRoutineBegin(snapshot));
    thisScheduler.add(CR_old_feedbackRoutineEachFrame(snapshot));
    thisScheduler.add(CR_old_feedbackRoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function CR_old_trialsLoopEnd() {
  psychoJS.experiment.removeLoop(CR_old_trials);

  return Scheduler.Event.NEXT;
}


var RT_trials;
function RT_trialsLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  RT_trials = new TrialHandler({
    psychoJS: psychoJS,
    nReps: RT_iter, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'RT_trials'
  });
  psychoJS.experiment.addLoop(RT_trials); // add the loop to the experiment
  currentLoop = RT_trials;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisRT_trial of RT_trials) {
    const snapshot = RT_trials.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    const RT_show_blocksLoopScheduler = new Scheduler(psychoJS);
    thisScheduler.add(RT_show_blocksLoopBegin, RT_show_blocksLoopScheduler);
    thisScheduler.add(RT_show_blocksLoopScheduler);
    thisScheduler.add(RT_show_blocksLoopEnd);
    thisScheduler.add(RT_Load_Stim_TrialsRoutineBegin(snapshot));
    thisScheduler.add(RT_Load_Stim_TrialsRoutineEachFrame(snapshot));
    thisScheduler.add(RT_Load_Stim_TrialsRoutineEnd(snapshot));
    thisScheduler.add(RT_enter_trialsRoutineBegin(snapshot));
    thisScheduler.add(RT_enter_trialsRoutineEachFrame(snapshot));
    thisScheduler.add(RT_enter_trialsRoutineEnd(snapshot));
    thisScheduler.add(RT_feedbackRoutineBegin(snapshot));
    thisScheduler.add(RT_feedbackRoutineEachFrame(snapshot));
    thisScheduler.add(RT_feedbackRoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


var RT_show_blocks;
function RT_show_blocksLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  RT_show_blocks = new TrialHandler({
    psychoJS: psychoJS,
    nReps: RT_show_blocks, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'RT_show_blocks'
  });
  psychoJS.experiment.addLoop(RT_show_blocks); // add the loop to the experiment
  currentLoop = RT_show_blocks;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisRT_show_block of RT_show_blocks) {
    const snapshot = RT_show_blocks.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(Instr_RT_blocksRoutineBegin(snapshot));
    thisScheduler.add(Instr_RT_blocksRoutineEachFrame(snapshot));
    thisScheduler.add(Instr_RT_blocksRoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function RT_show_blocksLoopEnd() {
  psychoJS.experiment.removeLoop(RT_show_blocks);

  return Scheduler.Event.NEXT;
}


function RT_trialsLoopEnd() {
  psychoJS.experiment.removeLoop(RT_trials);

  return Scheduler.Event.NEXT;
}


var CR_new_trials;
function CR_new_trialsLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  CR_new_trials = new TrialHandler({
    psychoJS: psychoJS,
    nReps: CR_iter, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'CR_new_trials'
  });
  psychoJS.experiment.addLoop(CR_new_trials); // add the loop to the experiment
  currentLoop = CR_new_trials;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisCR_new_trial of CR_new_trials) {
    const snapshot = CR_new_trials.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(CR_Load_Stim_TrialRoutineBegin(snapshot));
    thisScheduler.add(CR_Load_Stim_TrialRoutineEachFrame(snapshot));
    thisScheduler.add(CR_Load_Stim_TrialRoutineEnd(snapshot));
    thisScheduler.add(CR_enter_trialRoutineBegin(snapshot));
    thisScheduler.add(CR_enter_trialRoutineEachFrame(snapshot));
    thisScheduler.add(CR_enter_trialRoutineEnd(snapshot));
    thisScheduler.add(CR_new_feedbackRoutineBegin(snapshot));
    thisScheduler.add(CR_new_feedbackRoutineEachFrame(snapshot));
    thisScheduler.add(CR_new_feedbackRoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function CR_new_trialsLoopEnd() {
  psychoJS.experiment.removeLoop(CR_new_trials);

  return Scheduler.Event.NEXT;
}


var TR_new_trials;
function TR_new_trialsLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  TR_new_trials = new TrialHandler({
    psychoJS: psychoJS,
    nReps: TR_iter, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'TR_new_trials'
  });
  psychoJS.experiment.addLoop(TR_new_trials); // add the loop to the experiment
  currentLoop = TR_new_trials;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisTR_new_trial of TR_new_trials) {
    const snapshot = TR_new_trials.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    const TR_show_blocksLoopScheduler = new Scheduler(psychoJS);
    thisScheduler.add(TR_show_blocksLoopBegin, TR_show_blocksLoopScheduler);
    thisScheduler.add(TR_show_blocksLoopScheduler);
    thisScheduler.add(TR_show_blocksLoopEnd);
    thisScheduler.add(TR_Load_Stim_TrialsRoutineBegin(snapshot));
    thisScheduler.add(TR_Load_Stim_TrialsRoutineEachFrame(snapshot));
    thisScheduler.add(TR_Load_Stim_TrialsRoutineEnd(snapshot));
    thisScheduler.add(TR_enter_trialsRoutineBegin(snapshot));
    thisScheduler.add(TR_enter_trialsRoutineEachFrame(snapshot));
    thisScheduler.add(TR_enter_trialsRoutineEnd(snapshot));
    const TR_feedback_loopLoopScheduler = new Scheduler(psychoJS);
    thisScheduler.add(TR_feedback_loopLoopBegin, TR_feedback_loopLoopScheduler);
    thisScheduler.add(TR_feedback_loopLoopScheduler);
    thisScheduler.add(TR_feedback_loopLoopEnd);
    const TR_penalty_loopLoopScheduler = new Scheduler(psychoJS);
    thisScheduler.add(TR_penalty_loopLoopBegin, TR_penalty_loopLoopScheduler);
    thisScheduler.add(TR_penalty_loopLoopScheduler);
    thisScheduler.add(TR_penalty_loopLoopEnd);
    thisScheduler.add(TR_after_trialsRoutineBegin(snapshot));
    thisScheduler.add(TR_after_trialsRoutineEachFrame(snapshot));
    thisScheduler.add(TR_after_trialsRoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


var TR_show_blocks;
function TR_show_blocksLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  TR_show_blocks = new TrialHandler({
    psychoJS: psychoJS,
    nReps: TR_show_blocks, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'TR_show_blocks'
  });
  psychoJS.experiment.addLoop(TR_show_blocks); // add the loop to the experiment
  currentLoop = TR_show_blocks;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisTR_show_block of TR_show_blocks) {
    const snapshot = TR_show_blocks.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(Instr_TR_blocksRoutineBegin(snapshot));
    thisScheduler.add(Instr_TR_blocksRoutineEachFrame(snapshot));
    thisScheduler.add(Instr_TR_blocksRoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function TR_show_blocksLoopEnd() {
  psychoJS.experiment.removeLoop(TR_show_blocks);

  return Scheduler.Event.NEXT;
}


var TR_feedback_loop;
function TR_feedback_loopLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  TR_feedback_loop = new TrialHandler({
    psychoJS: psychoJS,
    nReps: TR_feedback, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'TR_feedback_loop'
  });
  psychoJS.experiment.addLoop(TR_feedback_loop); // add the loop to the experiment
  currentLoop = TR_feedback_loop;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisTR_feedback_loop of TR_feedback_loop) {
    const snapshot = TR_feedback_loop.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(TR_feedbackRoutineBegin(snapshot));
    thisScheduler.add(TR_feedbackRoutineEachFrame(snapshot));
    thisScheduler.add(TR_feedbackRoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function TR_feedback_loopLoopEnd() {
  psychoJS.experiment.removeLoop(TR_feedback_loop);

  return Scheduler.Event.NEXT;
}


var TR_penalty_loop;
function TR_penalty_loopLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  TR_penalty_loop = new TrialHandler({
    psychoJS: psychoJS,
    nReps: TR_penalty, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'TR_penalty_loop'
  });
  psychoJS.experiment.addLoop(TR_penalty_loop); // add the loop to the experiment
  currentLoop = TR_penalty_loop;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisTR_penalty_loop of TR_penalty_loop) {
    const snapshot = TR_penalty_loop.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(TR_PenaltyRoutineBegin(snapshot));
    thisScheduler.add(TR_PenaltyRoutineEachFrame(snapshot));
    thisScheduler.add(TR_PenaltyRoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function TR_penalty_loopLoopEnd() {
  psychoJS.experiment.removeLoop(TR_penalty_loop);

  return Scheduler.Event.NEXT;
}


function TR_new_trialsLoopEnd() {
  psychoJS.experiment.removeLoop(TR_new_trials);

  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var Load_StimComponents;
function Load_StimRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'Load_Stim'-------
    t = 0;
    Load_StimClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    // keep track of which components have finished
    Load_StimComponents = [];
    
    for (const thisComponent of Load_StimComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


var continueRoutine;
function Load_StimRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'Load_Stim'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = Load_StimClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Load_StimComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Load_StimRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'Load_Stim'-------
    for (const thisComponent of Load_StimComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "Load_Stim" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _Instr_Overall_press_allKeys;
var Instr_OVERALLComponents;
function Instr_OVERALLRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'Instr_OVERALL'-------
    t = 0;
    Instr_OVERALLClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    Instr_Overall_press.keys = undefined;
    Instr_Overall_press.rt = undefined;
    _Instr_Overall_press_allKeys = [];
    // keep track of which components have finished
    Instr_OVERALLComponents = [];
    Instr_OVERALLComponents.push(Instr_Overall_text);
    Instr_OVERALLComponents.push(Instr_Overall_press);
    
    for (const thisComponent of Instr_OVERALLComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function Instr_OVERALLRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'Instr_OVERALL'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = Instr_OVERALLClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Instr_Overall_text* updates
    if (t >= 0.0 && Instr_Overall_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Instr_Overall_text.tStart = t;  // (not accounting for frame time here)
      Instr_Overall_text.frameNStart = frameN;  // exact frame index
      
      Instr_Overall_text.setAutoDraw(true);
    }

    
    // *Instr_Overall_press* updates
    if (t >= 0.0 && Instr_Overall_press.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Instr_Overall_press.tStart = t;  // (not accounting for frame time here)
      Instr_Overall_press.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Instr_Overall_press.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Instr_Overall_press.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Instr_Overall_press.clearEvents(); });
    }

    if (Instr_Overall_press.status === PsychoJS.Status.STARTED) {
      let theseKeys = Instr_Overall_press.getKeys({keyList: ['space'], waitRelease: false});
      _Instr_Overall_press_allKeys = _Instr_Overall_press_allKeys.concat(theseKeys);
      if (_Instr_Overall_press_allKeys.length > 0) {
        Instr_Overall_press.keys = _Instr_Overall_press_allKeys[0].name;  // just the first key pressed
        Instr_Overall_press.rt = _Instr_Overall_press_allKeys[0].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Instr_OVERALLComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Instr_OVERALLRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'Instr_OVERALL'-------
    for (const thisComponent of Instr_OVERALLComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Instr_Overall_press.keys', Instr_Overall_press.keys);
    if (typeof Instr_Overall_press.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('Instr_Overall_press.rt', Instr_Overall_press.rt);
        routineTimer.reset();
        }
    
    Instr_Overall_press.stop();
    // the Routine "Instr_OVERALL" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var x4;
var x8;
var count;
var Creat_HAND_RT_StimSeqComponents;
function Creat_HAND_RT_StimSeqRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'Creat_HAND_RT_StimSeq'-------
    t = 0;
    Creat_HAND_RT_StimSeqClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    StimList = stim_elements.trialList;
    hand_shape = StimList[0]["Hand"];
    for (var i = 0, _pj_a = num_pos; (i < _pj_a); i += 1) {
        x.append(StimList[i]["x_pos"]);
        y.append(StimList[i]["y_pos"]);
        finger.append(StimList[i]["CorrResp"]);
    }
    x4 = stim_key;
    x8 = x4.concat(x4);
    count = 0;
    while ((count < (HAND_RT_iter / 20))) {
        util.shuffle(x8);
        for (var i, _pj_c = 0, _pj_a = x8, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
            i = _pj_a[_pj_c];
            HAND_RT_X_seq.append(x[i]);
            HAND_RT_Y_seq.append(y[i]);
            HAND_RT_Finger_seq.append(finger[i]);
        }
        util.shuffle(x8);
        for (var i, _pj_c = 0, _pj_a = x8, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
            i = _pj_a[_pj_c];
            HAND_RT_X_seq.append(x[i]);
            HAND_RT_Y_seq.append(y[i]);
            HAND_RT_Finger_seq.append(finger[i]);
        }
        util.shuffle(x4);
        for (var i, _pj_c = 0, _pj_a = x4, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
            i = _pj_a[_pj_c];
            HAND_RT_X_seq.append(x[i]);
            HAND_RT_Y_seq.append(y[i]);
            HAND_RT_Finger_seq.append(finger[i]);
        }
        count = (count + 1);
    }
    
    // keep track of which components have finished
    Creat_HAND_RT_StimSeqComponents = [];
    
    for (const thisComponent of Creat_HAND_RT_StimSeqComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function Creat_HAND_RT_StimSeqRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'Creat_HAND_RT_StimSeq'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = Creat_HAND_RT_StimSeqClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Creat_HAND_RT_StimSeqComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Creat_HAND_RT_StimSeqRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'Creat_HAND_RT_StimSeq'-------
    for (const thisComponent of Creat_HAND_RT_StimSeqComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "Creat_HAND_RT_StimSeq" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _Instr_HAND_RT_press_allKeys;
var Instr_HAND_RTComponents;
function Instr_HAND_RTRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'Instr_HAND_RT'-------
    t = 0;
    Instr_HAND_RTClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    Instr_HAND_RT_press.keys = undefined;
    Instr_HAND_RT_press.rt = undefined;
    _Instr_HAND_RT_press_allKeys = [];
    // keep track of which components have finished
    Instr_HAND_RTComponents = [];
    Instr_HAND_RTComponents.push(Instr_HAND_RT_text);
    Instr_HAND_RTComponents.push(Instr_HAND_RT_press);
    
    for (const thisComponent of Instr_HAND_RTComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function Instr_HAND_RTRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'Instr_HAND_RT'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = Instr_HAND_RTClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Instr_HAND_RT_text* updates
    if (t >= 0.0 && Instr_HAND_RT_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Instr_HAND_RT_text.tStart = t;  // (not accounting for frame time here)
      Instr_HAND_RT_text.frameNStart = frameN;  // exact frame index
      
      Instr_HAND_RT_text.setAutoDraw(true);
    }

    
    // *Instr_HAND_RT_press* updates
    if (t >= 0.0 && Instr_HAND_RT_press.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Instr_HAND_RT_press.tStart = t;  // (not accounting for frame time here)
      Instr_HAND_RT_press.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Instr_HAND_RT_press.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Instr_HAND_RT_press.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Instr_HAND_RT_press.clearEvents(); });
    }

    if (Instr_HAND_RT_press.status === PsychoJS.Status.STARTED) {
      let theseKeys = Instr_HAND_RT_press.getKeys({keyList: ['h', 'u', 'i', 'l'], waitRelease: false});
      _Instr_HAND_RT_press_allKeys = _Instr_HAND_RT_press_allKeys.concat(theseKeys);
      if (_Instr_HAND_RT_press_allKeys.length > 0) {
        Instr_HAND_RT_press.keys = _Instr_HAND_RT_press_allKeys[0].name;  // just the first key pressed
        Instr_HAND_RT_press.rt = _Instr_HAND_RT_press_allKeys[0].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Instr_HAND_RTComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Instr_HAND_RTRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'Instr_HAND_RT'-------
    for (const thisComponent of Instr_HAND_RTComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Instr_HAND_RT_press.keys', Instr_HAND_RT_press.keys);
    if (typeof Instr_HAND_RT_press.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('Instr_HAND_RT_press.rt', Instr_HAND_RT_press.rt);
        routineTimer.reset();
        }
    
    Instr_HAND_RT_press.stop();
    // the Routine "Instr_HAND_RT" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var x_item;
var finger_item;
var y_item;
var position_item;
var Load_HAND_RT_Stim_TrialsComponents;
function Load_HAND_RT_Stim_TrialsRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'Load_HAND_RT_Stim_Trials'-------
    t = 0;
    Load_HAND_RT_Stim_TrialsClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    x_item = HAND_RT_X_seq[HAND_RT_trials_count];
    finger_item = HAND_RT_Finger_seq[HAND_RT_trials_count];
    y_item = HAND_RT_Y_seq[HAND_RT_trials_count];
    position_item = [x_item, y_item];
    psychoJS.experiment.addData("X_pos", x_item);
    psychoJS.experiment.addData("Y_pos", y_item);
    psychoJS.experiment.addData("Finger", finger_item);
    psychoJS.experiment.addData("Block_Type", "HAND_RT");
    psychoJS.experiment.addData("Remap", 0);
    psychoJS.experiment.addData("HAND_RT_trials_count", HAND_RT_trials_count);
    
    // keep track of which components have finished
    Load_HAND_RT_Stim_TrialsComponents = [];
    
    for (const thisComponent of Load_HAND_RT_Stim_TrialsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function Load_HAND_RT_Stim_TrialsRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'Load_HAND_RT_Stim_Trials'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = Load_HAND_RT_Stim_TrialsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Load_HAND_RT_Stim_TrialsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Load_HAND_RT_Stim_TrialsRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'Load_HAND_RT_Stim_Trials'-------
    for (const thisComponent of Load_HAND_RT_Stim_TrialsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "Load_HAND_RT_Stim_Trials" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _HAND_RT_key_press_allKeys;
var HAND_RT_enter_trialsComponents;
function HAND_RT_enter_trialsRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'HAND_RT_enter_trials'-------
    t = 0;
    HAND_RT_enter_trialsClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    HAND_RT_key_press.keys = undefined;
    HAND_RT_key_press.rt = undefined;
    _HAND_RT_key_press_allKeys = [];
    HAND_RT_hand.setImage(hand_shape);
    HAND_RT_stim.setPos(position_item);
    // keep track of which components have finished
    HAND_RT_enter_trialsComponents = [];
    HAND_RT_enter_trialsComponents.push(hand_rt_circle_frame);
    HAND_RT_enter_trialsComponents.push(HAND_RT_key_press);
    HAND_RT_enter_trialsComponents.push(HAND_RT_hand);
    HAND_RT_enter_trialsComponents.push(HAND_RT_stim);
    
    for (const thisComponent of HAND_RT_enter_trialsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function HAND_RT_enter_trialsRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'HAND_RT_enter_trials'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = HAND_RT_enter_trialsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *hand_rt_circle_frame* updates
    if (t >= 0.0 && hand_rt_circle_frame.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      hand_rt_circle_frame.tStart = t;  // (not accounting for frame time here)
      hand_rt_circle_frame.frameNStart = frameN;  // exact frame index
      
      hand_rt_circle_frame.setAutoDraw(true);
    }

    
    // *HAND_RT_key_press* updates
    if (t >= 0.0 && HAND_RT_key_press.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      HAND_RT_key_press.tStart = t;  // (not accounting for frame time here)
      HAND_RT_key_press.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { HAND_RT_key_press.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { HAND_RT_key_press.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { HAND_RT_key_press.clearEvents(); });
    }

    if (HAND_RT_key_press.status === PsychoJS.Status.STARTED) {
      let theseKeys = HAND_RT_key_press.getKeys({keyList: ['h', 'u', 'i', 'l'], waitRelease: false});
      _HAND_RT_key_press_allKeys = _HAND_RT_key_press_allKeys.concat(theseKeys);
      if (_HAND_RT_key_press_allKeys.length > 0) {
        HAND_RT_key_press.keys = _HAND_RT_key_press_allKeys[0].name;  // just the first key pressed
        HAND_RT_key_press.rt = _HAND_RT_key_press_allKeys[0].rt;
        // was this correct?
        if (HAND_RT_key_press.keys == finger_item) {
            HAND_RT_key_press.corr = 1;
        } else {
            HAND_RT_key_press.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *HAND_RT_hand* updates
    if (t >= 0.0 && HAND_RT_hand.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      HAND_RT_hand.tStart = t;  // (not accounting for frame time here)
      HAND_RT_hand.frameNStart = frameN;  // exact frame index
      
      HAND_RT_hand.setAutoDraw(true);
    }

    
    // *HAND_RT_stim* updates
    if (t >= 0.0 && HAND_RT_stim.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      HAND_RT_stim.tStart = t;  // (not accounting for frame time here)
      HAND_RT_stim.frameNStart = frameN;  // exact frame index
      
      HAND_RT_stim.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of HAND_RT_enter_trialsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var HAND_RT_feedback_duration;
var HAND_RT_feedback_color;
function HAND_RT_enter_trialsRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'HAND_RT_enter_trials'-------
    for (const thisComponent of HAND_RT_enter_trialsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    if (HAND_RT_key_press.corr) {
        HAND_RT_feedback_duration = 0.2;
        HAND_RT_feedback_color = [(- 1), 1, (- 1)];
    } else {
        HAND_RT_feedback_duration = 1;
        HAND_RT_feedback_color = [1, (- 1), (- 1)];
    }
    
    // was no response the correct answer?!
    if (HAND_RT_key_press.keys === undefined) {
      if (['None','none',undefined].includes(finger_item)) {
         HAND_RT_key_press.corr = 1;  // correct non-response
      } else {
         HAND_RT_key_press.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for thisExp (ExperimentHandler)
    psychoJS.experiment.addData('HAND_RT_key_press.keys', HAND_RT_key_press.keys);
    psychoJS.experiment.addData('HAND_RT_key_press.corr', HAND_RT_key_press.corr);
    if (typeof HAND_RT_key_press.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('HAND_RT_key_press.rt', HAND_RT_key_press.rt);
        routineTimer.reset();
        }
    
    HAND_RT_key_press.stop();
    // the Routine "HAND_RT_enter_trials" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var HAND_RT_feedbackComponents;
function HAND_RT_feedbackRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'HAND_RT_feedback'-------
    t = 0;
    HAND_RT_feedbackClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    HAND_RT_hand_feedback.setImage(hand_shape);
    HAND_RT_stim_feedback.setPos(position_item);
    HAND_RT_stim_feedback.setFillColor(new util.Color(HAND_RT_feedback_color));
    HAND_RT_stim_feedback.setLineColor(new util.Color(HAND_RT_feedback_color));
    // keep track of which components have finished
    HAND_RT_feedbackComponents = [];
    HAND_RT_feedbackComponents.push(hand_rt_circle_frame_feedback);
    HAND_RT_feedbackComponents.push(HAND_RT_hand_feedback);
    HAND_RT_feedbackComponents.push(HAND_RT_stim_feedback);
    
    for (const thisComponent of HAND_RT_feedbackComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


var frameRemains;
function HAND_RT_feedbackRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'HAND_RT_feedback'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = HAND_RT_feedbackClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *hand_rt_circle_frame_feedback* updates
    if (t >= 0.0 && hand_rt_circle_frame_feedback.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      hand_rt_circle_frame_feedback.tStart = t;  // (not accounting for frame time here)
      hand_rt_circle_frame_feedback.frameNStart = frameN;  // exact frame index
      
      hand_rt_circle_frame_feedback.setAutoDraw(true);
    }

    frameRemains = 0.0 + HAND_RT_feedback_duration - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (hand_rt_circle_frame_feedback.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      hand_rt_circle_frame_feedback.setAutoDraw(false);
    }
    
    // *HAND_RT_hand_feedback* updates
    if (t >= 0.0 && HAND_RT_hand_feedback.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      HAND_RT_hand_feedback.tStart = t;  // (not accounting for frame time here)
      HAND_RT_hand_feedback.frameNStart = frameN;  // exact frame index
      
      HAND_RT_hand_feedback.setAutoDraw(true);
    }

    frameRemains = 0.0 + HAND_RT_feedback_duration - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (HAND_RT_hand_feedback.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      HAND_RT_hand_feedback.setAutoDraw(false);
    }
    
    // *HAND_RT_stim_feedback* updates
    if (t >= 0.0 && HAND_RT_stim_feedback.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      HAND_RT_stim_feedback.tStart = t;  // (not accounting for frame time here)
      HAND_RT_stim_feedback.frameNStart = frameN;  // exact frame index
      
      HAND_RT_stim_feedback.setAutoDraw(true);
    }

    frameRemains = 0.0 + HAND_RT_feedback_duration - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (HAND_RT_stim_feedback.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      HAND_RT_stim_feedback.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of HAND_RT_feedbackComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function HAND_RT_feedbackRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'HAND_RT_feedback'-------
    for (const thisComponent of HAND_RT_feedbackComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    HAND_RT_trials_count = (HAND_RT_trials_count + 1);
    
    // the Routine "HAND_RT_feedback" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _Instr_HAND_TR_press_allKeys;
var Instr_HAND_TRComponents;
function Instr_HAND_TRRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'Instr_HAND_TR'-------
    t = 0;
    Instr_HAND_TRClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    Instr_HAND_TR_press.keys = undefined;
    Instr_HAND_TR_press.rt = undefined;
    _Instr_HAND_TR_press_allKeys = [];
    // keep track of which components have finished
    Instr_HAND_TRComponents = [];
    Instr_HAND_TRComponents.push(instr_HAND_TR_text);
    Instr_HAND_TRComponents.push(Instr_HAND_TR_press);
    
    for (const thisComponent of Instr_HAND_TRComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function Instr_HAND_TRRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'Instr_HAND_TR'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = Instr_HAND_TRClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instr_HAND_TR_text* updates
    if (t >= 0.0 && instr_HAND_TR_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_HAND_TR_text.tStart = t;  // (not accounting for frame time here)
      instr_HAND_TR_text.frameNStart = frameN;  // exact frame index
      
      instr_HAND_TR_text.setAutoDraw(true);
    }

    
    // *Instr_HAND_TR_press* updates
    if (t >= 0.0 && Instr_HAND_TR_press.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Instr_HAND_TR_press.tStart = t;  // (not accounting for frame time here)
      Instr_HAND_TR_press.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Instr_HAND_TR_press.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Instr_HAND_TR_press.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Instr_HAND_TR_press.clearEvents(); });
    }

    if (Instr_HAND_TR_press.status === PsychoJS.Status.STARTED) {
      let theseKeys = Instr_HAND_TR_press.getKeys({keyList: ['h', 'u', 'i', 'l'], waitRelease: false});
      _Instr_HAND_TR_press_allKeys = _Instr_HAND_TR_press_allKeys.concat(theseKeys);
      if (_Instr_HAND_TR_press_allKeys.length > 0) {
        Instr_HAND_TR_press.keys = _Instr_HAND_TR_press_allKeys[0].name;  // just the first key pressed
        Instr_HAND_TR_press.rt = _Instr_HAND_TR_press_allKeys[0].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Instr_HAND_TRComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Instr_HAND_TRRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'Instr_HAND_TR'-------
    for (const thisComponent of Instr_HAND_TRComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Instr_HAND_TR_press.keys', Instr_HAND_TR_press.keys);
    if (typeof Instr_HAND_TR_press.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('Instr_HAND_TR_press.rt', Instr_HAND_TR_press.rt);
        routineTimer.reset();
        }
    
    Instr_HAND_TR_press.stop();
    // the Routine "Instr_HAND_TR" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var Creat_HAND_TR_StimSeqComponents;
function Creat_HAND_TR_StimSeqRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'Creat_HAND_TR_StimSeq'-------
    t = 0;
    Creat_HAND_TR_StimSeqClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    count = 0;
    while ((count < (HAND_TR_iter / 20))) {
        util.shuffle(x8);
        for (var i, _pj_c = 0, _pj_a = x8, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
            i = _pj_a[_pj_c];
            HAND_TR_X_seq.append(x[i]);
            HAND_TR_Y_seq.append(y[i]);
            HAND_TR_Finger_seq.append(finger[i]);
        }
        util.shuffle(x8);
        for (var i, _pj_c = 0, _pj_a = x8, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
            i = _pj_a[_pj_c];
            HAND_TR_X_seq.append(x[i]);
            HAND_TR_Y_seq.append(y[i]);
            HAND_TR_Finger_seq.append(finger[i]);
        }
        util.shuffle(x4);
        for (var i, _pj_c = 0, _pj_a = x4, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
            i = _pj_a[_pj_c];
            HAND_TR_X_seq.append(x[i]);
            HAND_TR_Y_seq.append(y[i]);
            HAND_TR_Finger_seq.append(finger[i]);
        }
        count = (count + 1);
    }
    
    // keep track of which components have finished
    Creat_HAND_TR_StimSeqComponents = [];
    
    for (const thisComponent of Creat_HAND_TR_StimSeqComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function Creat_HAND_TR_StimSeqRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'Creat_HAND_TR_StimSeq'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = Creat_HAND_TR_StimSeqClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Creat_HAND_TR_StimSeqComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var Hand_TR_block_num;
var hand_tr_timing_good;
var Hand_TR_show_blocks;
var HAND_TR_trials_count;
function Creat_HAND_TR_StimSeqRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'Creat_HAND_TR_StimSeq'-------
    for (const thisComponent of Creat_HAND_TR_StimSeqComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    Hand_TR_block_num = 1;
    hand_tr_timing_good = 0;
    Hand_TR_show_blocks = 1;
    HAND_TR_trials_count = 0;
    
    // the Routine "Creat_HAND_TR_StimSeq" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _HAND_TR_blocks_key_resp_allKeys;
var Instr_Hand_TR_blocksComponents;
function Instr_Hand_TR_blocksRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'Instr_Hand_TR_blocks'-------
    t = 0;
    Instr_Hand_TR_blocksClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    Instr_Hand_TR_blocks_num.setText((('Block ' + Hand_TR_block_num) + '\nPress any key to start'));
    HAND_TR_blocks_key_resp.keys = undefined;
    HAND_TR_blocks_key_resp.rt = undefined;
    _HAND_TR_blocks_key_resp_allKeys = [];
    // keep track of which components have finished
    Instr_Hand_TR_blocksComponents = [];
    Instr_Hand_TR_blocksComponents.push(Instr_Hand_TR_blocks_num);
    Instr_Hand_TR_blocksComponents.push(HAND_TR_blocks_key_resp);
    
    for (const thisComponent of Instr_Hand_TR_blocksComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function Instr_Hand_TR_blocksRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'Instr_Hand_TR_blocks'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = Instr_Hand_TR_blocksClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Instr_Hand_TR_blocks_num* updates
    if (t >= 0.0 && Instr_Hand_TR_blocks_num.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Instr_Hand_TR_blocks_num.tStart = t;  // (not accounting for frame time here)
      Instr_Hand_TR_blocks_num.frameNStart = frameN;  // exact frame index
      
      Instr_Hand_TR_blocks_num.setAutoDraw(true);
    }

    
    // *HAND_TR_blocks_key_resp* updates
    if (t >= 0.0 && HAND_TR_blocks_key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      HAND_TR_blocks_key_resp.tStart = t;  // (not accounting for frame time here)
      HAND_TR_blocks_key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { HAND_TR_blocks_key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { HAND_TR_blocks_key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { HAND_TR_blocks_key_resp.clearEvents(); });
    }

    if (HAND_TR_blocks_key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = HAND_TR_blocks_key_resp.getKeys({keyList: ['h', 'u', 'i', 'l'], waitRelease: false});
      _HAND_TR_blocks_key_resp_allKeys = _HAND_TR_blocks_key_resp_allKeys.concat(theseKeys);
      if (_HAND_TR_blocks_key_resp_allKeys.length > 0) {
        HAND_TR_blocks_key_resp.keys = _HAND_TR_blocks_key_resp_allKeys[0].name;  // just the first key pressed
        HAND_TR_blocks_key_resp.rt = _HAND_TR_blocks_key_resp_allKeys[0].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Instr_Hand_TR_blocksComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Instr_Hand_TR_blocksRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'Instr_Hand_TR_blocks'-------
    for (const thisComponent of Instr_Hand_TR_blocksComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('HAND_TR_blocks_key_resp.keys', HAND_TR_blocks_key_resp.keys);
    if (typeof HAND_TR_blocks_key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('HAND_TR_blocks_key_resp.rt', HAND_TR_blocks_key_resp.rt);
        routineTimer.reset();
        }
    
    HAND_TR_blocks_key_resp.stop();
    // the Routine "Instr_Hand_TR_blocks" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var start_time;
var prep_time;
var Load_HAND_TR_Stim_TrialsComponents;
function Load_HAND_TR_Stim_TrialsRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'Load_HAND_TR_Stim_Trials'-------
    t = 0;
    Load_HAND_TR_Stim_TrialsClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    x_item = HAND_TR_X_seq[HAND_TR_trials_count];
    finger_item = HAND_TR_Finger_seq[HAND_TR_trials_count];
    y_item = HAND_TR_Y_seq[HAND_TR_trials_count];
    position_item = [x_item, y_item];
    start_time = ((Math.random() * 1.3) + 0.3);
    prep_time = ((time_limit - 0.2) - start_time);
    psychoJS.experiment.addData("X_pos", x_item);
    psychoJS.experiment.addData("Y_pos", y_item);
    psychoJS.experiment.addData("Finger", finger_item);
    psychoJS.experiment.addData("Block_Type", "HAND_RT");
    psychoJS.experiment.addData("Remap", 0);
    psychoJS.experiment.addData("HAND_TR_trials_count", HAND_TR_trials_count);
    psychoJS.experiment.addData("HAND_TR_prep_time", prep_time);
    
    // keep track of which components have finished
    Load_HAND_TR_Stim_TrialsComponents = [];
    
    for (const thisComponent of Load_HAND_TR_Stim_TrialsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function Load_HAND_TR_Stim_TrialsRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'Load_HAND_TR_Stim_Trials'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = Load_HAND_TR_Stim_TrialsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Load_HAND_TR_Stim_TrialsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Load_HAND_TR_Stim_TrialsRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'Load_HAND_TR_Stim_Trials'-------
    for (const thisComponent of Load_HAND_TR_Stim_TrialsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "Load_HAND_TR_Stim_Trials" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var TR_penalty;
var TR_feedback;
var _HAND_TR_key_press_allKeys;
var HAND_TR_enter_trialsComponents;
function HAND_TR_enter_trialsRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'HAND_TR_enter_trials'-------
    t = 0;
    HAND_TR_enter_trialsClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    routineTimer.reset(time_limit);
    HAND_TR_key_press.early = 0;
    HAND_TR_key_press.late = 0;
    HAND_TR_key_press.tooearly = 0;
    HAND_TR_key_press.toolate = 0;
    TR_penalty = 0;
    TR_feedback = 0;
    
    HAND_TR_hand.setImage(hand_shape);
    HAND_TR_stim.setPos(position_item);
    HAND_TR_key_press.keys = undefined;
    HAND_TR_key_press.rt = undefined;
    _HAND_TR_key_press_allKeys = [];
    // keep track of which components have finished
    HAND_TR_enter_trialsComponents = [];
    HAND_TR_enter_trialsComponents.push(HAND_TR_circle);
    HAND_TR_enter_trialsComponents.push(hand_tr_circle_frame);
    HAND_TR_enter_trialsComponents.push(HAND_TR_hand);
    HAND_TR_enter_trialsComponents.push(HAND_TR_stim);
    HAND_TR_enter_trialsComponents.push(HAND_TR_key_press);
    
    for (const thisComponent of HAND_TR_enter_trialsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function HAND_TR_enter_trialsRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'HAND_TR_enter_trials'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = HAND_TR_enter_trialsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *HAND_TR_circle* updates
    if (t >= 0.0 && HAND_TR_circle.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      HAND_TR_circle.tStart = t;  // (not accounting for frame time here)
      HAND_TR_circle.frameNStart = frameN;  // exact frame index
      
      HAND_TR_circle.setAutoDraw(true);
      hand_tr_circle_frame.setAutoDraw(true);
      HAND_TR_hand.setAutoDraw(true);
    }

    frameRemains = time_limit  - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (HAND_TR_circle.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      HAND_TR_circle.setAutoDraw(false);
    }
    
    if (HAND_TR_circle.status === PsychoJS.Status.STARTED){ // only update if being drawn
      HAND_TR_circle.setSize([(0.275 + (0.2 * routineTimer.getTime())), (0.275 + (0.2 * routineTimer.getTime()))]);
      //HAND_TR_circle.setRadius(0.1375 + (0.1 * routineTimer.getTime()));
      hand_tr_circle_frame.refresh();
      HAND_TR_hand.refresh();
      HAND_TR_stim.refresh();
    }
    
    frameRemains = time_limit  - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (hand_tr_circle_frame.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      hand_tr_circle_frame.setAutoDraw(false);
    }
    
    frameRemains = time_limit  - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (HAND_TR_hand.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      HAND_TR_hand.setAutoDraw(false);
    }
    
    // *HAND_TR_stim* updates
    if (t >= start_time && HAND_TR_stim.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      HAND_TR_stim.tStart = t;  // (not accounting for frame time here)
      HAND_TR_stim.frameNStart = frameN;  // exact frame index
      
      HAND_TR_stim.setAutoDraw(true);
    }

    frameRemains = time_limit  - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (HAND_TR_stim.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      HAND_TR_stim.setAutoDraw(false);
    }
    
    // *HAND_TR_key_press* updates
    if (t >= 0.0 && HAND_TR_key_press.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      HAND_TR_key_press.tStart = t;  // (not accounting for frame time here)
      HAND_TR_key_press.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { HAND_TR_key_press.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { HAND_TR_key_press.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { HAND_TR_key_press.clearEvents(); });
    }

    frameRemains = 0.0 + time_limit - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (HAND_TR_key_press.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      HAND_TR_key_press.status = PsychoJS.Status.FINISHED;
  }

    if (HAND_TR_key_press.status === PsychoJS.Status.STARTED) {
      let theseKeys = HAND_TR_key_press.getKeys({keyList: ['h', 'u', 'i', 'l'], waitRelease: false});
      _HAND_TR_key_press_allKeys = _HAND_TR_key_press_allKeys.concat(theseKeys);
      if (_HAND_TR_key_press_allKeys.length > 0) {
        HAND_TR_key_press.keys = _HAND_TR_key_press_allKeys[0].name;  // just the first key pressed
        HAND_TR_key_press.rt = _HAND_TR_key_press_allKeys[0].rt;
        // was this correct?
        if (HAND_TR_key_press.keys == finger_item) {
            HAND_TR_key_press.corr = 1;
        } else {
            HAND_TR_key_press.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of HAND_TR_enter_trialsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

var TR_feedback_text;
var TR_feedback_text_color;
var HAND_TR_feedback_color;
var HAND_TR_feedback_duration;
function HAND_TR_enter_trialsRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'HAND_TR_enter_trials'-------
    for (const thisComponent of HAND_TR_enter_trialsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    if ((HAND_TR_key_press.keys != null)) {
        if (HAND_TR_key_press.corr) {
            HAND_TR_feedback_color = [(- 1), 1, (- 1)];
        } else {
            HAND_TR_feedback_color = [1, (- 1), (- 1)];
        }
        if ((HAND_TR_key_press.rt < ((time_limit - 0.2) - 0.3))) {
            HAND_TR_key_press.tooearly = 1;
            TR_penalty = 1;
        } else {
            TR_feedback = 1;
            hand_tr_timing_good = (hand_tr_timing_good + 1);
            if ((HAND_TR_key_press.rt < ((time_limit - 0.2) - timing_tol_early))) {
                HAND_TR_key_press.early = 1;
            } else {
                if ((HAND_TR_key_press.rt > ((time_limit - 0.2) + timing_tol_late))) {
                    HAND_TR_key_press.late = 1;
                }
            }
        }
    } else {
        HAND_TR_key_press.toolate = 1;
        TR_penalty = 1;
    }
    HAND_TR_feedback_duration = 0.3;
    if ((TR_penalty === 1)) {
        if ((HAND_TR_key_press.toolate === 1)) {
            TR_penalty_text = `no response or you responded way too late.
    2 second penalty.
    After 2 second, press any key to continue.`
    ;
        } else {
            if ((HAND_TR_key_press.tooearly === 1)) {
                TR_penalty_text = `You responded way too early,
    2 second penalty.
    After 2 second, press any key to continue.`
    ;
            }
        }
    } else {
        if ((TR_feedback === 1)) {
            if ((HAND_TR_key_press.late === 1)) {
                TR_feedback_text = `little late`;
                TR_feedback_text_color = [1, (- 1), (- 1)];
            } else {
                if ((HAND_TR_key_press.early === 1)) {
                    TR_feedback_text = `little early`;
                    TR_feedback_text_color = [1, (- 1), (- 1)];
                } else {
                    TR_feedback_text = `good timing`;
                    TR_feedback_text_color = [(- 1), 1, (- 1)];
                }
            }
        }
    }
    
    // was no response the correct answer?!
    if (HAND_TR_key_press.keys === undefined) {
      if (['None','none',undefined].includes(finger_item)) {
         HAND_TR_key_press.corr = 1;  // correct non-response
      } else {
         HAND_TR_key_press.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for thisExp (ExperimentHandler)
    psychoJS.experiment.addData('HAND_TR_key_press.keys', HAND_TR_key_press.keys);
    psychoJS.experiment.addData('HAND_TR_key_press.corr', HAND_TR_key_press.corr);
    if (typeof HAND_TR_key_press.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('HAND_TR_key_press.rt', HAND_TR_key_press.rt);
        routineTimer.reset();
        }
    
    HAND_TR_key_press.stop();
    // the Routine "HAND_TR_enter_trials" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var HAND_TR_feedbackComponents;
function HAND_TR_feedbackRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'HAND_TR_feedback'-------
    t = 0;
    HAND_TR_feedbackClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    HAND_TR_hand_feedback.setImage(hand_shape);
    HAND_TR_stim_feedback.setPos(position_item);
    HAND_TR_stim_feedback.setFillColor(new util.Color(HAND_TR_feedback_color));
    HAND_TR_stim_feedback.setLineColor(new util.Color(HAND_TR_feedback_color));
    HAND_TR_feedback_text.setColor(new util.Color(TR_feedback_text_color));
    HAND_TR_feedback_text.setText(TR_feedback_text);
    // keep track of which components have finished
    HAND_TR_feedbackComponents = [];
    HAND_TR_feedbackComponents.push(hand_tr_circle_frame_feedback);
    HAND_TR_feedbackComponents.push(HAND_TR_hand_feedback);
    HAND_TR_feedbackComponents.push(HAND_TR_stim_feedback);
    HAND_TR_feedbackComponents.push(HAND_TR_feedback_text);
    
    for (const thisComponent of HAND_TR_feedbackComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function HAND_TR_feedbackRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'HAND_TR_feedback'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = HAND_TR_feedbackClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *hand_tr_circle_frame_feedback* updates
    if (t >= 0.0 && hand_tr_circle_frame_feedback.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      hand_tr_circle_frame_feedback.tStart = t;  // (not accounting for frame time here)
      hand_tr_circle_frame_feedback.frameNStart = frameN;  // exact frame index
      
      hand_tr_circle_frame_feedback.setAutoDraw(true);
    }

    frameRemains = 0.0 + HAND_TR_feedback_duration - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (hand_tr_circle_frame_feedback.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      hand_tr_circle_frame_feedback.setAutoDraw(false);
    }
    
    // *HAND_TR_hand_feedback* updates
    if (t >= 0.0 && HAND_TR_hand_feedback.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      HAND_TR_hand_feedback.tStart = t;  // (not accounting for frame time here)
      HAND_TR_hand_feedback.frameNStart = frameN;  // exact frame index
      
      HAND_TR_hand_feedback.setAutoDraw(true);
    }

    frameRemains = 0.0 + HAND_TR_feedback_duration - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (HAND_TR_hand_feedback.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      HAND_TR_hand_feedback.setAutoDraw(false);
    }
    
    // *HAND_TR_stim_feedback* updates
    if (t >= 0.0 && HAND_TR_stim_feedback.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      HAND_TR_stim_feedback.tStart = t;  // (not accounting for frame time here)
      HAND_TR_stim_feedback.frameNStart = frameN;  // exact frame index
      
      HAND_TR_stim_feedback.setAutoDraw(true);
    }

    frameRemains = 0.0 + HAND_TR_feedback_duration - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (HAND_TR_stim_feedback.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      HAND_TR_stim_feedback.setAutoDraw(false);
    }
    
    // *HAND_TR_feedback_text* updates
    if (t >= 0.0 && HAND_TR_feedback_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      HAND_TR_feedback_text.tStart = t;  // (not accounting for frame time here)
      HAND_TR_feedback_text.frameNStart = frameN;  // exact frame index
      
      HAND_TR_feedback_text.setAutoDraw(true);
    }

    frameRemains = 0.0 + HAND_TR_feedback_duration - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (HAND_TR_feedback_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      HAND_TR_feedback_text.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of HAND_TR_feedbackComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function HAND_TR_feedbackRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'HAND_TR_feedback'-------
    for (const thisComponent of HAND_TR_feedbackComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "HAND_TR_feedback" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _TR_Penalty_key_resp_allKeys;
var HAND_TR_penaltyComponents;
function HAND_TR_penaltyRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'HAND_TR_penalty'-------
    t = 0;
    HAND_TR_penaltyClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    TR_penalty_page.setText(TR_penalty_text);
    TR_Penalty_key_resp.keys = undefined;
    TR_Penalty_key_resp.rt = undefined;
    _TR_Penalty_key_resp_allKeys = [];
    // keep track of which components have finished
    HAND_TR_penaltyComponents = [];
    HAND_TR_penaltyComponents.push(hand_tr_circle_frame_penalty);
    HAND_TR_penaltyComponents.push(TR_penalty_page);
    HAND_TR_penaltyComponents.push(TR_Penalty_key_resp);
    
    for (const thisComponent of HAND_TR_penaltyComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function HAND_TR_penaltyRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'HAND_TR_penalty'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = HAND_TR_penaltyClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *hand_tr_circle_frame_penalty* updates
    if (t >= 0.0 && hand_tr_circle_frame_penalty.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      hand_tr_circle_frame_penalty.tStart = t;  // (not accounting for frame time here)
      hand_tr_circle_frame_penalty.frameNStart = frameN;  // exact frame index
      
      hand_tr_circle_frame_penalty.setAutoDraw(true);
    }

    
    // *TR_penalty_page* updates
    if (t >= 0.0 && TR_penalty_page.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      TR_penalty_page.tStart = t;  // (not accounting for frame time here)
      TR_penalty_page.frameNStart = frameN;  // exact frame index
      
      TR_penalty_page.setAutoDraw(true);
    }

    
    // *TR_Penalty_key_resp* updates
    if (t >= 2 && TR_Penalty_key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      TR_Penalty_key_resp.tStart = t;  // (not accounting for frame time here)
      TR_Penalty_key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { TR_Penalty_key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { TR_Penalty_key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { TR_Penalty_key_resp.clearEvents(); });
    }

    if (TR_Penalty_key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = TR_Penalty_key_resp.getKeys({keyList: ['h', 'u', 'i', 'l'], waitRelease: false});
      _TR_Penalty_key_resp_allKeys = _TR_Penalty_key_resp_allKeys.concat(theseKeys);
      if (_TR_Penalty_key_resp_allKeys.length > 0) {
        TR_Penalty_key_resp.keys = _TR_Penalty_key_resp_allKeys[0].name;  // just the first key pressed
        TR_Penalty_key_resp.rt = _TR_Penalty_key_resp_allKeys[0].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of HAND_TR_penaltyComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function HAND_TR_penaltyRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'HAND_TR_penalty'-------
    for (const thisComponent of HAND_TR_penaltyComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('TR_Penalty_key_resp.keys', TR_Penalty_key_resp.keys);
    if (typeof TR_Penalty_key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('TR_Penalty_key_resp.rt', TR_Penalty_key_resp.rt);
        routineTimer.reset();
        }
    
    TR_Penalty_key_resp.stop();
    // the Routine "HAND_TR_penalty" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var hand_Tr_timing_perc;
var HAND_TR_blocks_determineQuitComponents;
function HAND_TR_blocks_determineQuitRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'HAND_TR_blocks_determineQuit'-------
    t = 0;
    HAND_TR_blocks_determineQuitClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    psychoJS.experiment.addData("HAND_TR_trials", HAND_TR_trials_count);
    if (((HAND_TR_trials_count > 0) && (((HAND_TR_trials_count + 1) % num_trials) === 0))) {
        Hand_TR_show_blocks = 1;
        Hand_TR_block_num = ((HAND_TR_trials_count + 1) / num_trials);
        if ((Hand_TR_block_num > 1)) {
            hand_Tr_timing_perc = (hand_tr_timing_good / num_trials);
            if ((hand_Tr_timing_perc > 0.7)) {
                trials.finished = true;
            }
        }
        hand_tr_timing_good = 0;
        Hand_TR_block_num = (Hand_TR_block_num + 1);
    } else {
        Hand_TR_show_blocks = 0;
    }
    
    // keep track of which components have finished
    HAND_TR_blocks_determineQuitComponents = [];
    
    for (const thisComponent of HAND_TR_blocks_determineQuitComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function HAND_TR_blocks_determineQuitRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'HAND_TR_blocks_determineQuit'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = HAND_TR_blocks_determineQuitClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of HAND_TR_blocks_determineQuitComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function HAND_TR_blocks_determineQuitRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'HAND_TR_blocks_determineQuit'-------
    for (const thisComponent of HAND_TR_blocks_determineQuitComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    HAND_TR_trials_count = (HAND_TR_trials_count + 1);
    
    // the Routine "HAND_TR_blocks_determineQuit" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}

var num_image;
var participant;
var stim_key_map_rnd;
var stim_key_map;
var finger_new;
var remap_pairs;
var ind_pair;
var remap_pair;
var Creat_CR_old_StimSeqComponents;
function Creat_CR_old_StimSeqRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'Creat_CR_old_StimSeq'-------
    t = 0;
    Creat_CR_old_StimSeqClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    num_image = 4;
    for (var i = 0, _pj_a = num_image; (i < _pj_a); i += 1) {
        stim.append(StimList[i]["Stim"]);
        image.append(StimList[i]["imStim"]);
        image_r.append(StimList[i]["imStim_r"]);
        image_g.append(StimList[i]["imStim_g"]);
    }
    participant = Number.parseInt(expInfo["participant"]);
    if ((participant == null)) {
        stim_key_map_rnd = 0;
    } else {
        stim_key_map_rnd = (participant % n_map);
    }
    stim_key_map = stim_key_perm[stim_key_map_rnd];
    finger_new = [];
    for (var i = 0, _pj_a = num_image; (i < _pj_a); i += 1) {
        finger_new.append(finger[stim_key_map[i]]);
    }
    psychoJS.experiment.addData("stim_key_map", stim_key_map);
    remap_pairs = [[0, 1], [0, 2], [0, 3], [1, 2], [1, 3], [2, 3]];
    if ((participant == null)) {
        ind_pair = 0;
    } else {
        ind_pair = (participant % remap_pairs.length);
    }
    remap_pair = remap_pairs[ind_pair];
    psychoJS.experiment.addData("remap_pair", remap_pair);
    count = 0;
    while ((count < (CR_iter / 20))) {
        util.shuffle(x8);
        for (var i, _pj_c = 0, _pj_a = x8, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
            i = _pj_a[_pj_c];
            CR_Stim_seq.append(stim[i]);
            CR_Finger_seq.append(finger_new[i]);
            CR_Image_seq.append(image[i]);
            CR_Image_r_seq.append(image_r[i]);
            CR_Image_g_seq.append(image_g[i]);
        }
        util.shuffle(x8);
        for (var i, _pj_c = 0, _pj_a = x8, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
            i = _pj_a[_pj_c];
            CR_Stim_seq.append(stim[i]);
            CR_Finger_seq.append(finger_new[i]);
            CR_Image_seq.append(image[i]);
            CR_Image_r_seq.append(image_r[i]);
            CR_Image_g_seq.append(image_g[i]);
        }
        util.shuffle(x4);
        for (var i, _pj_c = 0, _pj_a = x4, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
            i = _pj_a[_pj_c];
            CR_Stim_seq.append(stim[i]);
            CR_Finger_seq.append(finger_new[i]);
            CR_Image_seq.append(image[i]);
            CR_Image_r_seq.append(image_r[i]);
            CR_Image_g_seq.append(image_g[i]);
        }
        count = (count + 1);
    }
    
    // keep track of which components have finished
    Creat_CR_old_StimSeqComponents = [];
    
    for (const thisComponent of Creat_CR_old_StimSeqComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function Creat_CR_old_StimSeqRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'Creat_CR_old_StimSeq'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = Creat_CR_old_StimSeqClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Creat_CR_old_StimSeqComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var CR_trials_count;
var CR_repeat_count;
var sum_corr;
function Creat_CR_old_StimSeqRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'Creat_CR_old_StimSeq'-------
    for (const thisComponent of Creat_CR_old_StimSeqComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    CR_trials_count = 0;
    CR_repeat_count = 0;
    sum_corr = [0, 0, 0, 0];
    
    // the Routine "Creat_CR_old_StimSeq" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _Instr_CR_old_key_resp_allKeys;
var Instr_CR_oldComponents;
function Instr_CR_oldRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'Instr_CR_old'-------
    t = 0;
    Instr_CR_oldClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    Instr_CR_old_key_resp.keys = undefined;
    Instr_CR_old_key_resp.rt = undefined;
    _Instr_CR_old_key_resp_allKeys = [];
    // keep track of which components have finished
    Instr_CR_oldComponents = [];
    Instr_CR_oldComponents.push(Instr_CR_old_text);
    Instr_CR_oldComponents.push(Instr_CR_old_key_resp);
    
    for (const thisComponent of Instr_CR_oldComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function Instr_CR_oldRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'Instr_CR_old'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = Instr_CR_oldClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Instr_CR_old_text* updates
    if (t >= 0.0 && Instr_CR_old_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Instr_CR_old_text.tStart = t;  // (not accounting for frame time here)
      Instr_CR_old_text.frameNStart = frameN;  // exact frame index
      
      Instr_CR_old_text.setAutoDraw(true);
    }

    
    // *Instr_CR_old_key_resp* updates
    if (t >= 0.0 && Instr_CR_old_key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Instr_CR_old_key_resp.tStart = t;  // (not accounting for frame time here)
      Instr_CR_old_key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Instr_CR_old_key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Instr_CR_old_key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Instr_CR_old_key_resp.clearEvents(); });
    }

    if (Instr_CR_old_key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = Instr_CR_old_key_resp.getKeys({keyList: ['h', 'u', 'i', 'l'], waitRelease: false});
      _Instr_CR_old_key_resp_allKeys = _Instr_CR_old_key_resp_allKeys.concat(theseKeys);
      if (_Instr_CR_old_key_resp_allKeys.length > 0) {
        Instr_CR_old_key_resp.keys = _Instr_CR_old_key_resp_allKeys[0].name;  // just the first key pressed
        Instr_CR_old_key_resp.rt = _Instr_CR_old_key_resp_allKeys[0].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Instr_CR_oldComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Instr_CR_oldRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'Instr_CR_old'-------
    for (const thisComponent of Instr_CR_oldComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Instr_CR_old_key_resp.keys', Instr_CR_old_key_resp.keys);
    if (typeof Instr_CR_old_key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('Instr_CR_old_key_resp.rt', Instr_CR_old_key_resp.rt);
        routineTimer.reset();
        }
    
    Instr_CR_old_key_resp.stop();
    // the Routine "Instr_CR_old" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var stim_item;
var image_item;
var image_r_item;
var image_g_item;
var CR_Load_Stim_TrialComponents;
function CR_Load_Stim_TrialRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'CR_Load_Stim_Trial'-------
    t = 0;
    CR_Load_Stim_TrialClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    stim_item = CR_Stim_seq[CR_trials_count];
    finger_item = CR_Finger_seq[CR_trials_count];
    image_item = CR_Image_seq[CR_trials_count];
    image_r_item = CR_Image_r_seq[CR_trials_count];
    image_g_item = CR_Image_g_seq[CR_trials_count];
    psychoJS.experiment.addData("StimIndex", stim_item);
    psychoJS.experiment.addData("Finger", finger_item);
    psychoJS.experiment.addData("Shape", image_item);
    psychoJS.experiment.addData("Block_Type", "CR");
    psychoJS.experiment.addData("Remap", 1);
    psychoJS.experiment.addData("CR_repeat_count", CR_repeat_count);
    psychoJS.experiment.addData("CR_trials_count", CR_trials_count);
    
    // keep track of which components have finished
    CR_Load_Stim_TrialComponents = [];
    
    for (const thisComponent of CR_Load_Stim_TrialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function CR_Load_Stim_TrialRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'CR_Load_Stim_Trial'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = CR_Load_Stim_TrialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of CR_Load_Stim_TrialComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function CR_Load_Stim_TrialRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'CR_Load_Stim_Trial'-------
    for (const thisComponent of CR_Load_Stim_TrialComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "CR_Load_Stim_Trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _CR_key_press_allKeys;
var CR_enter_trialComponents;
function CR_enter_trialRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'CR_enter_trial'-------
    t = 0;
    CR_enter_trialClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    CR_stim_image.setImage(image_item);
    CR_key_press.keys = undefined;
    CR_key_press.rt = undefined;
    _CR_key_press_allKeys = [];
    // keep track of which components have finished
    CR_enter_trialComponents = [];
    CR_enter_trialComponents.push(CR_circle_frame);
    CR_enter_trialComponents.push(CR_stim_image);
    CR_enter_trialComponents.push(CR_key_press);
    
    for (const thisComponent of CR_enter_trialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function CR_enter_trialRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'CR_enter_trial'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = CR_enter_trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *CR_circle_frame* updates
    if (t >= 0.0 && CR_circle_frame.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      CR_circle_frame.tStart = t;  // (not accounting for frame time here)
      CR_circle_frame.frameNStart = frameN;  // exact frame index
      
      CR_circle_frame.setAutoDraw(true);
    }

    
    // *CR_stim_image* updates
    if (t >= 0.0 && CR_stim_image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      CR_stim_image.tStart = t;  // (not accounting for frame time here)
      CR_stim_image.frameNStart = frameN;  // exact frame index
      
      CR_stim_image.setAutoDraw(true);
    }

    
    // *CR_key_press* updates
    if (t >= 0.0 && CR_key_press.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      CR_key_press.tStart = t;  // (not accounting for frame time here)
      CR_key_press.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { CR_key_press.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { CR_key_press.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { CR_key_press.clearEvents(); });
    }

    if (CR_key_press.status === PsychoJS.Status.STARTED) {
      let theseKeys = CR_key_press.getKeys({keyList: ['h', 'u', 'i', 'l'], waitRelease: false});
      _CR_key_press_allKeys = _CR_key_press_allKeys.concat(theseKeys);
      if (_CR_key_press_allKeys.length > 0) {
        CR_key_press.keys = _CR_key_press_allKeys[0].name;  // just the first key pressed
        CR_key_press.rt = _CR_key_press_allKeys[0].rt;
        // was this correct?
        if (CR_key_press.keys == finger_item) {
            CR_key_press.corr = 1;
        } else {
            CR_key_press.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of CR_enter_trialComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var CR_feedback_duration;
var image_item_feedback;
function CR_enter_trialRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'CR_enter_trial'-------
    for (const thisComponent of CR_enter_trialComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    CR_feedback_duration = 1;
    if (CR_key_press.corr) {
        image_item_feedback = image_g_item;
    } else {
        image_item_feedback = image_r_item;
    }
    
    // was no response the correct answer?!
    if (CR_key_press.keys === undefined) {
      if (['None','none',undefined].includes(finger_item)) {
         CR_key_press.corr = 1;  // correct non-response
      } else {
         CR_key_press.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for thisExp (ExperimentHandler)
    psychoJS.experiment.addData('CR_key_press.keys', CR_key_press.keys);
    psychoJS.experiment.addData('CR_key_press.corr', CR_key_press.corr);
    if (typeof CR_key_press.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('CR_key_press.rt', CR_key_press.rt);
        routineTimer.reset();
        }
    
    CR_key_press.stop();
    // the Routine "CR_enter_trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var CR_old_feedbackComponents;
function CR_old_feedbackRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'CR_old_feedback'-------
    t = 0;
    CR_old_feedbackClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    CR_old_feedback_circle.setLineColor(new util.Color(circle_frame_color));
    CR_old_feedback_image.setColor(new util.Color([1, 1, 1]));
    CR_old_feedback_image.setImage(image_item_feedback);
    // keep track of which components have finished
    CR_old_feedbackComponents = [];
    CR_old_feedbackComponents.push(CR_old_feedback_circle);
    CR_old_feedbackComponents.push(CR_old_feedback_image);
    
    for (const thisComponent of CR_old_feedbackComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function CR_old_feedbackRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'CR_old_feedback'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = CR_old_feedbackClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *CR_old_feedback_circle* updates
    if (t >= 0.0 && CR_old_feedback_circle.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      CR_old_feedback_circle.tStart = t;  // (not accounting for frame time here)
      CR_old_feedback_circle.frameNStart = frameN;  // exact frame index
      
      CR_old_feedback_circle.setAutoDraw(true);
    }

    frameRemains = 0.0 + CR_feedback_duration - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (CR_old_feedback_circle.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      CR_old_feedback_circle.setAutoDraw(false);
    }
    
    // *CR_old_feedback_image* updates
    if (t >= 0.0 && CR_old_feedback_image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      CR_old_feedback_image.tStart = t;  // (not accounting for frame time here)
      CR_old_feedback_image.frameNStart = frameN;  // exact frame index
      
      CR_old_feedback_image.setAutoDraw(true);
    }

    frameRemains = 0.0 + CR_feedback_duration - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (CR_old_feedback_image.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      CR_old_feedback_image.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of CR_old_feedbackComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function CR_old_feedbackRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'CR_old_feedback'-------
    for (const thisComponent of CR_old_feedbackComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    if (((CR_repeat_count === 0) && CR_key_press.corr)) {
        sum_corr[stim_item] = (sum_corr[stim_item] + 1);
    } else {
        if (((! CR_key_press.corr) && (sum_corr[stim_item] < num_criterion))) {
            sum_corr[stim_item] = 0;
        }
    }
    if (CR_key_press.corr) {
        CR_trials_count = (CR_trials_count + 1);
        CR_repeat_count = 0;
    } else {
        CR_repeat_count = (CR_repeat_count + 1);
    }
    function CR_crit(ls) {
        for (var i, _pj_c = 0, _pj_a = ls, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
            i = _pj_a[_pj_c];
            if ((i < num_criterion)) {
                return false;
            }
        }
        return true;
    }
    if (CR_crit(sum_corr)){
      trials.finished = true;
    }
    
    // the Routine "CR_old_feedback" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _Instr_RT_key_resp_allKeys;
var Instr_RTComponents;
function Instr_RTRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'Instr_RT'-------
    t = 0;
    Instr_RTClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    Instr_RT_key_resp.keys = undefined;
    Instr_RT_key_resp.rt = undefined;
    _Instr_RT_key_resp_allKeys = [];
    // keep track of which components have finished
    Instr_RTComponents = [];
    Instr_RTComponents.push(Instr_RT_text);
    Instr_RTComponents.push(Instr_RT_key_resp);
    
    for (const thisComponent of Instr_RTComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function Instr_RTRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'Instr_RT'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = Instr_RTClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Instr_RT_text* updates
    if (t >= 0.0 && Instr_RT_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Instr_RT_text.tStart = t;  // (not accounting for frame time here)
      Instr_RT_text.frameNStart = frameN;  // exact frame index
      
      Instr_RT_text.setAutoDraw(true);
    }

    
    // *Instr_RT_key_resp* updates
    if (t >= 0.0 && Instr_RT_key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Instr_RT_key_resp.tStart = t;  // (not accounting for frame time here)
      Instr_RT_key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Instr_RT_key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Instr_RT_key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Instr_RT_key_resp.clearEvents(); });
    }

    if (Instr_RT_key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = Instr_RT_key_resp.getKeys({keyList: ['h', 'u', 'i', 'l'], waitRelease: false});
      _Instr_RT_key_resp_allKeys = _Instr_RT_key_resp_allKeys.concat(theseKeys);
      if (_Instr_RT_key_resp_allKeys.length > 0) {
        Instr_RT_key_resp.keys = _Instr_RT_key_resp_allKeys[0].name;  // just the first key pressed
        Instr_RT_key_resp.rt = _Instr_RT_key_resp_allKeys[0].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Instr_RTComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Instr_RTRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'Instr_RT'-------
    for (const thisComponent of Instr_RTComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Instr_RT_key_resp.keys', Instr_RT_key_resp.keys);
    if (typeof Instr_RT_key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('Instr_RT_key_resp.rt', Instr_RT_key_resp.rt);
        routineTimer.reset();
        }
    
    Instr_RT_key_resp.stop();
    // the Routine "Instr_RT" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var Creat_RT_StimSeqComponents;
function Creat_RT_StimSeqRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'Creat_RT_StimSeq'-------
    t = 0;
    Creat_RT_StimSeqClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    count = 0;
    while ((count < (RT_iter / 20))) {
        util.shuffle(x8);
        for (var i, _pj_c = 0, _pj_a = x8, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
            i = _pj_a[_pj_c];
            RT_Stim_seq.append(stim[i]);
            RT_Finger_seq.append(finger_new[i]);
            RT_Image_seq.append(image[i]);
            RT_Image_r_seq.append(image_r[i]);
            RT_Image_g_seq.append(image_g[i]);
        }
        util.shuffle(x8);
        for (var i, _pj_c = 0, _pj_a = x8, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
            i = _pj_a[_pj_c];
            RT_Stim_seq.append(stim[i]);
            RT_Finger_seq.append(finger_new[i]);
            RT_Image_seq.append(image[i]);
            RT_Image_r_seq.append(image_r[i]);
            RT_Image_g_seq.append(image_g[i]);
        }
        util.shuffle(x4);
        for (var i, _pj_c = 0, _pj_a = x4, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
            i = _pj_a[_pj_c];
            RT_Stim_seq.append(stim[i]);
            RT_Finger_seq.append(finger_new[i]);
            RT_Image_seq.append(image[i]);
            RT_Image_r_seq.append(image_r[i]);
            RT_Image_g_seq.append(image_g[i]);
        }
        count = (count + 1);
    }
    
    // keep track of which components have finished
    Creat_RT_StimSeqComponents = [];
    
    for (const thisComponent of Creat_RT_StimSeqComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function Creat_RT_StimSeqRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'Creat_RT_StimSeq'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = Creat_RT_StimSeqClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Creat_RT_StimSeqComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var RT_block_num;
var RT_trials_count;
function Creat_RT_StimSeqRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'Creat_RT_StimSeq'-------
    for (const thisComponent of Creat_RT_StimSeqComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    RT_block_num = 1;
    RT_show_blocks = 1;
    RT_trials_count = 0;
    
    // the Routine "Creat_RT_StimSeq" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _RT_blocks_key_resp_allKeys;
var Instr_RT_blocksComponents;
function Instr_RT_blocksRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'Instr_RT_blocks'-------
    t = 0;
    Instr_RT_blocksClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    Instr_RT_blocks_num.setText((('Block ' + RT_block_num) + '\nPress any key to start'));
    RT_blocks_key_resp.keys = undefined;
    RT_blocks_key_resp.rt = undefined;
    _RT_blocks_key_resp_allKeys = [];
    // keep track of which components have finished
    Instr_RT_blocksComponents = [];
    Instr_RT_blocksComponents.push(Instr_RT_blocks_num);
    Instr_RT_blocksComponents.push(RT_blocks_key_resp);
    
    for (const thisComponent of Instr_RT_blocksComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function Instr_RT_blocksRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'Instr_RT_blocks'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = Instr_RT_blocksClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Instr_RT_blocks_num* updates
    if (t >= 0.0 && Instr_RT_blocks_num.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Instr_RT_blocks_num.tStart = t;  // (not accounting for frame time here)
      Instr_RT_blocks_num.frameNStart = frameN;  // exact frame index
      
      Instr_RT_blocks_num.setAutoDraw(true);
    }

    
    // *RT_blocks_key_resp* updates
    if (t >= 0.0 && RT_blocks_key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      RT_blocks_key_resp.tStart = t;  // (not accounting for frame time here)
      RT_blocks_key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { RT_blocks_key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { RT_blocks_key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { RT_blocks_key_resp.clearEvents(); });
    }

    if (RT_blocks_key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = RT_blocks_key_resp.getKeys({keyList: ['h', 'u', 'i', 'l'], waitRelease: false});
      _RT_blocks_key_resp_allKeys = _RT_blocks_key_resp_allKeys.concat(theseKeys);
      if (_RT_blocks_key_resp_allKeys.length > 0) {
        RT_blocks_key_resp.keys = _RT_blocks_key_resp_allKeys[0].name;  // just the first key pressed
        RT_blocks_key_resp.rt = _RT_blocks_key_resp_allKeys[0].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Instr_RT_blocksComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Instr_RT_blocksRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'Instr_RT_blocks'-------
    for (const thisComponent of Instr_RT_blocksComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('RT_blocks_key_resp.keys', RT_blocks_key_resp.keys);
    if (typeof RT_blocks_key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('RT_blocks_key_resp.rt', RT_blocks_key_resp.rt);
        routineTimer.reset();
        }
    
    RT_blocks_key_resp.stop();
    // the Routine "Instr_RT_blocks" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var RT_Load_Stim_TrialsComponents;
function RT_Load_Stim_TrialsRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'RT_Load_Stim_Trials'-------
    t = 0;
    RT_Load_Stim_TrialsClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    stim_item = RT_Stim_seq[RT_trials_count];
    finger_item = RT_Finger_seq[RT_trials_count];
    image_item = RT_Image_seq[RT_trials_count];
    image_r_item = RT_Image_r_seq[RT_trials_count];
    image_g_item = RT_Image_g_seq[RT_trials_count];
    psychoJS.experiment.addData("StimIndex", stim_item);
    psychoJS.experiment.addData("Finger", finger_item);
    psychoJS.experiment.addData("Shape", image_item);
    psychoJS.experiment.addData("Block_Type", "CR");
    psychoJS.experiment.addData("Remap", 0);
    psychoJS.experiment.addData("RT_trials_count", RT_trials_count);
    
    // keep track of which components have finished
    RT_Load_Stim_TrialsComponents = [];
    
    for (const thisComponent of RT_Load_Stim_TrialsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function RT_Load_Stim_TrialsRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'RT_Load_Stim_Trials'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = RT_Load_Stim_TrialsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of RT_Load_Stim_TrialsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function RT_Load_Stim_TrialsRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'RT_Load_Stim_Trials'-------
    for (const thisComponent of RT_Load_Stim_TrialsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "RT_Load_Stim_Trials" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _RT_key_press_allKeys;
var RT_enter_trialsComponents;
function RT_enter_trialsRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'RT_enter_trials'-------
    t = 0;
    RT_enter_trialsClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    RT_stim_image.setImage(image_item);
    RT_key_press.keys = undefined;
    RT_key_press.rt = undefined;
    _RT_key_press_allKeys = [];
    // keep track of which components have finished
    RT_enter_trialsComponents = [];
    RT_enter_trialsComponents.push(RT_circle_frame);
    RT_enter_trialsComponents.push(RT_stim_image);
    RT_enter_trialsComponents.push(RT_key_press);
    
    for (const thisComponent of RT_enter_trialsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function RT_enter_trialsRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'RT_enter_trials'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = RT_enter_trialsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *RT_circle_frame* updates
    if (t >= 0.0 && RT_circle_frame.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      RT_circle_frame.tStart = t;  // (not accounting for frame time here)
      RT_circle_frame.frameNStart = frameN;  // exact frame index
      
      RT_circle_frame.setAutoDraw(true);
    }

    
    // *RT_stim_image* updates
    if (t >= 0.0 && RT_stim_image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      RT_stim_image.tStart = t;  // (not accounting for frame time here)
      RT_stim_image.frameNStart = frameN;  // exact frame index
      
      RT_stim_image.setAutoDraw(true);
    }

    
    // *RT_key_press* updates
    if (t >= 0.0 && RT_key_press.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      RT_key_press.tStart = t;  // (not accounting for frame time here)
      RT_key_press.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { RT_key_press.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { RT_key_press.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { RT_key_press.clearEvents(); });
    }

    if (RT_key_press.status === PsychoJS.Status.STARTED) {
      let theseKeys = RT_key_press.getKeys({keyList: ['h', 'u', 'i', 'l'], waitRelease: false});
      _RT_key_press_allKeys = _RT_key_press_allKeys.concat(theseKeys);
      if (_RT_key_press_allKeys.length > 0) {
        RT_key_press.keys = _RT_key_press_allKeys[0].name;  // just the first key pressed
        RT_key_press.rt = _RT_key_press_allKeys[0].rt;
        // was this correct?
        if (RT_key_press.keys == finger_item) {
            RT_key_press.corr = 1;
        } else {
            RT_key_press.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of RT_enter_trialsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var RT_feedback_duration;
function RT_enter_trialsRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'RT_enter_trials'-------
    for (const thisComponent of RT_enter_trialsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    if (RT_key_press.corr) {
        image_item_feedback = image_g_item;
        RT_feedback_duration = 0.2;
    } else {
        image_item_feedback = image_r_item;
        RT_feedback_duration = 1;
    }
    
    // was no response the correct answer?!
    if (RT_key_press.keys === undefined) {
      if (['None','none',undefined].includes(finger_item)) {
         RT_key_press.corr = 1;  // correct non-response
      } else {
         RT_key_press.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for thisExp (ExperimentHandler)
    psychoJS.experiment.addData('RT_key_press.keys', RT_key_press.keys);
    psychoJS.experiment.addData('RT_key_press.corr', RT_key_press.corr);
    if (typeof RT_key_press.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('RT_key_press.rt', RT_key_press.rt);
        routineTimer.reset();
        }
    
    RT_key_press.stop();
    // the Routine "RT_enter_trials" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var RT_feedbackComponents;
function RT_feedbackRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'RT_feedback'-------
    t = 0;
    RT_feedbackClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    RT_feedback_circle.setLineColor(new util.Color(circle_frame_color));
    RT_feedback_image.setColor(new util.Color([1, 1, 1]));
    RT_feedback_image.setImage(image_item_feedback);
    // keep track of which components have finished
    RT_feedbackComponents = [];
    RT_feedbackComponents.push(RT_feedback_circle);
    RT_feedbackComponents.push(RT_feedback_image);
    
    for (const thisComponent of RT_feedbackComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function RT_feedbackRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'RT_feedback'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = RT_feedbackClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *RT_feedback_circle* updates
    if (t >= 0.0 && RT_feedback_circle.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      RT_feedback_circle.tStart = t;  // (not accounting for frame time here)
      RT_feedback_circle.frameNStart = frameN;  // exact frame index
      
      RT_feedback_circle.setAutoDraw(true);
    }

    frameRemains = 0.0 + RT_feedback_duration - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (RT_feedback_circle.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      RT_feedback_circle.setAutoDraw(false);
    }
    
    // *RT_feedback_image* updates
    if (t >= 0.0 && RT_feedback_image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      RT_feedback_image.tStart = t;  // (not accounting for frame time here)
      RT_feedback_image.frameNStart = frameN;  // exact frame index
      
      RT_feedback_image.setAutoDraw(true);
    }

    frameRemains = 0.0 + RT_feedback_duration - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (RT_feedback_image.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      RT_feedback_image.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of RT_feedbackComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function RT_feedbackRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'RT_feedback'-------
    for (const thisComponent of RT_feedbackComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    if (((RT_trials_count > 0) && (((RT_trials_count + 1) % num_trials) === 0))) {
        RT_show_blocks = 1;
        RT_block_num = (RT_block_num + 1);
    } else {
        RT_show_blocks = 0;
    }
    RT_trials_count = (RT_trials_count + 1);
    
    // the Routine "RT_feedback" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var Creat_CR_new_StimSeqComponents;
function Creat_CR_new_StimSeqRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'Creat_CR_new_StimSeq'-------
    t = 0;
    Creat_CR_new_StimSeqClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    CR_Stim_seq = [];
    CR_Finger_seq = [];
    CR_Image_seq = [];
    CR_Image_r_seq = [];
    CR_Image_g_seq = [];
    for (var i = 0, _pj_a = num_image; (i < _pj_a); i += 1) {
        finger_remap.append(finger[stim_key_map[i]]);
    }
    finger_remap[remap_pair[0]] = finger_new[remap_pair[1]];
    finger_remap[remap_pair[1]] = finger_new[remap_pair[0]];
    count = 0;
    while ((count < (CR_iter / 20))) {
        util.shuffle(x8);
        for (var i, _pj_c = 0, _pj_a = x8, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
            i = _pj_a[_pj_c];
            CR_Stim_seq.append(stim[i]);
            CR_Finger_seq.append(finger_remap[i]);
            CR_Image_seq.append(image[i]);
            CR_Image_r_seq.append(image_r[i]);
            CR_Image_g_seq.append(image_g[i]);
        }
        util.shuffle(x8);
        for (var i, _pj_c = 0, _pj_a = x8, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
            i = _pj_a[_pj_c];
            CR_Stim_seq.append(stim[i]);
            CR_Finger_seq.append(finger_remap[i]);
            CR_Image_seq.append(image[i]);
            CR_Image_r_seq.append(image_r[i]);
            CR_Image_g_seq.append(image_g[i]);
        }
        util.shuffle(x4);
        for (var i, _pj_c = 0, _pj_a = x4, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
            i = _pj_a[_pj_c];
            CR_Stim_seq.append(stim[i]);
            CR_Finger_seq.append(finger_remap[i]);
            CR_Image_seq.append(image[i]);
            CR_Image_r_seq.append(image_r[i]);
            CR_Image_g_seq.append(image_g[i]);
        }
        count = (count + 1);
    }
    
    // keep track of which components have finished
    Creat_CR_new_StimSeqComponents = [];
    
    for (const thisComponent of Creat_CR_new_StimSeqComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function Creat_CR_new_StimSeqRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'Creat_CR_new_StimSeq'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = Creat_CR_new_StimSeqClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Creat_CR_new_StimSeqComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Creat_CR_new_StimSeqRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'Creat_CR_new_StimSeq'-------
    for (const thisComponent of Creat_CR_new_StimSeqComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    CR_trials_count = 0;
    CR_repeat_count = 0;
    sum_corr = [0, 0, 0, 0];
    
    // the Routine "Creat_CR_new_StimSeq" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _Instr_CR_new_key_resp_allKeys;
var Instr_CR_newComponents;
function Instr_CR_newRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'Instr_CR_new'-------
    t = 0;
    Instr_CR_newClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    Instr_CR_new_key_resp.keys = undefined;
    Instr_CR_new_key_resp.rt = undefined;
    _Instr_CR_new_key_resp_allKeys = [];
    // keep track of which components have finished
    Instr_CR_newComponents = [];
    Instr_CR_newComponents.push(Instr_CR_new_text);
    Instr_CR_newComponents.push(Instr_CR_new_key_resp);
    
    for (const thisComponent of Instr_CR_newComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function Instr_CR_newRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'Instr_CR_new'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = Instr_CR_newClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Instr_CR_new_text* updates
    if (t >= 0.0 && Instr_CR_new_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Instr_CR_new_text.tStart = t;  // (not accounting for frame time here)
      Instr_CR_new_text.frameNStart = frameN;  // exact frame index
      
      Instr_CR_new_text.setAutoDraw(true);
    }

    
    // *Instr_CR_new_key_resp* updates
    if (t >= 0.0 && Instr_CR_new_key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Instr_CR_new_key_resp.tStart = t;  // (not accounting for frame time here)
      Instr_CR_new_key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Instr_CR_new_key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Instr_CR_new_key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Instr_CR_new_key_resp.clearEvents(); });
    }

    if (Instr_CR_new_key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = Instr_CR_new_key_resp.getKeys({keyList: ['h', 'u', 'i', 'l'], waitRelease: false});
      _Instr_CR_new_key_resp_allKeys = _Instr_CR_new_key_resp_allKeys.concat(theseKeys);
      if (_Instr_CR_new_key_resp_allKeys.length > 0) {
        Instr_CR_new_key_resp.keys = _Instr_CR_new_key_resp_allKeys[0].name;  // just the first key pressed
        Instr_CR_new_key_resp.rt = _Instr_CR_new_key_resp_allKeys[0].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Instr_CR_newComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Instr_CR_newRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'Instr_CR_new'-------
    for (const thisComponent of Instr_CR_newComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Instr_CR_new_key_resp.keys', Instr_CR_new_key_resp.keys);
    if (typeof Instr_CR_new_key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('Instr_CR_new_key_resp.rt', Instr_CR_new_key_resp.rt);
        routineTimer.reset();
        }
    
    Instr_CR_new_key_resp.stop();
    // the Routine "Instr_CR_new" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var CR_new_feedbackComponents;
function CR_new_feedbackRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'CR_new_feedback'-------
    t = 0;
    CR_new_feedbackClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    CR_feedback_circle.setLineColor(new util.Color(circle_frame_color));
    CR_feedback_image.setColor(new util.Color([1, 1, 1]));
    CR_feedback_image.setImage(image_item_feedback);
    // keep track of which components have finished
    CR_new_feedbackComponents = [];
    CR_new_feedbackComponents.push(CR_feedback_circle);
    CR_new_feedbackComponents.push(CR_feedback_image);
    
    for (const thisComponent of CR_new_feedbackComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function CR_new_feedbackRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'CR_new_feedback'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = CR_new_feedbackClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *CR_feedback_circle* updates
    if (t >= 0.0 && CR_feedback_circle.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      CR_feedback_circle.tStart = t;  // (not accounting for frame time here)
      CR_feedback_circle.frameNStart = frameN;  // exact frame index
      
      CR_feedback_circle.setAutoDraw(true);
    }

    frameRemains = 0.0 + CR_feedback_duration - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (CR_feedback_circle.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      CR_feedback_circle.setAutoDraw(false);
    }
    
    // *CR_feedback_image* updates
    if (t >= 0.0 && CR_feedback_image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      CR_feedback_image.tStart = t;  // (not accounting for frame time here)
      CR_feedback_image.frameNStart = frameN;  // exact frame index
      
      CR_feedback_image.setAutoDraw(true);
    }

    frameRemains = 0.0 + CR_feedback_duration - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (CR_feedback_image.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      CR_feedback_image.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of CR_new_feedbackComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function CR_new_feedbackRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'CR_new_feedback'-------
    for (const thisComponent of CR_new_feedbackComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    if (((CR_repeat_count === 0) && CR_key_press.corr)) {
        sum_corr[stim_item] = (sum_corr[stim_item] + 1);
    } else {
        if (((! CR_key_press.corr) && (sum_corr[stim_item] < num_criterion))) {
            sum_corr[stim_item] = 0;
        }
    }
    if (CR_key_press.corr) {
        CR_trials_count = (CR_trials_count + 1);
        CR_repeat_count = 0;
    } else {
        CR_repeat_count = (CR_repeat_count + 1);
    }
    function CR_crit(ls) {
        for (var i, _pj_c = 0, _pj_a = ls, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
            i = _pj_a[_pj_c];
            if ((i < num_criterion)) {
                return false;
            }
        }
        return true;
    }
    if (CR_crit(sum_corr)){
      trials.finished = true;
    }
    
    // the Routine "CR_new_feedback" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _Instr_TR_key_resp_allKeys;
var Instr_TRComponents;
function Instr_TRRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'Instr_TR'-------
    t = 0;
    Instr_TRClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    Instr_TR_key_resp.keys = undefined;
    Instr_TR_key_resp.rt = undefined;
    _Instr_TR_key_resp_allKeys = [];
    // keep track of which components have finished
    Instr_TRComponents = [];
    Instr_TRComponents.push(instr_TR_text);
    Instr_TRComponents.push(Instr_TR_key_resp);
    
    for (const thisComponent of Instr_TRComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function Instr_TRRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'Instr_TR'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = Instr_TRClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instr_TR_text* updates
    if (t >= 0.0 && instr_TR_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_TR_text.tStart = t;  // (not accounting for frame time here)
      instr_TR_text.frameNStart = frameN;  // exact frame index
      
      instr_TR_text.setAutoDraw(true);
    }

    
    // *Instr_TR_key_resp* updates
    if (t >= 0.0 && Instr_TR_key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Instr_TR_key_resp.tStart = t;  // (not accounting for frame time here)
      Instr_TR_key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Instr_TR_key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Instr_TR_key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Instr_TR_key_resp.clearEvents(); });
    }

    if (Instr_TR_key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = Instr_TR_key_resp.getKeys({keyList: ['h', 'u', 'i', 'l'], waitRelease: false});
      _Instr_TR_key_resp_allKeys = _Instr_TR_key_resp_allKeys.concat(theseKeys);
      if (_Instr_TR_key_resp_allKeys.length > 0) {
        Instr_TR_key_resp.keys = _Instr_TR_key_resp_allKeys[0].name;  // just the first key pressed
        Instr_TR_key_resp.rt = _Instr_TR_key_resp_allKeys[0].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Instr_TRComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Instr_TRRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'Instr_TR'-------
    for (const thisComponent of Instr_TRComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Instr_TR_key_resp.keys', Instr_TR_key_resp.keys);
    if (typeof Instr_TR_key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('Instr_TR_key_resp.rt', Instr_TR_key_resp.rt);
        routineTimer.reset();
        }
    
    Instr_TR_key_resp.stop();
    // the Routine "Instr_TR" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var Creat_TR__new_StimSeqComponents;
function Creat_TR__new_StimSeqRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'Creat_TR__new_StimSeq'-------
    t = 0;
    Creat_TR__new_StimSeqClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    count = 0;
    while ((count < (TR_iter / 20))) {
        util.shuffle(x8);
        for (var i, _pj_c = 0, _pj_a = x8, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
            i = _pj_a[_pj_c];
            TR_Stim_seq.append(stim[i]);
            TR_Finger_seq.append(finger_remap[i]);
            TR_Image_seq.append(image[i]);
            TR_Image_r_seq.append(image_r[i]);
            TR_Image_g_seq.append(image_g[i]);
        }
        util.shuffle(x8);
        for (var i, _pj_c = 0, _pj_a = x8, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
            i = _pj_a[_pj_c];
            TR_Stim_seq.append(stim[i]);
            TR_Finger_seq.append(finger_remap[i]);
            TR_Image_seq.append(image[i]);
            TR_Image_r_seq.append(image_r[i]);
            TR_Image_g_seq.append(image_g[i]);
        }
        util.shuffle(x4);
        for (var i, _pj_c = 0, _pj_a = x4, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
            i = _pj_a[_pj_c];
            TR_Stim_seq.append(stim[i]);
            TR_Finger_seq.append(finger_remap[i]);
            TR_Image_seq.append(image[i]);
            TR_Image_r_seq.append(image_r[i]);
            TR_Image_g_seq.append(image_g[i]);
        }
        count = (count + 1);
    }
    
    // keep track of which components have finished
    Creat_TR__new_StimSeqComponents = [];
    
    for (const thisComponent of Creat_TR__new_StimSeqComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function Creat_TR__new_StimSeqRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'Creat_TR__new_StimSeq'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = Creat_TR__new_StimSeqClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Creat_TR__new_StimSeqComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var TR_block_num;
var TR_trials_count;
var tr_timing_good;
function Creat_TR__new_StimSeqRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'Creat_TR__new_StimSeq'-------
    for (const thisComponent of Creat_TR__new_StimSeqComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    TR_block_num = 1;
    TR_show_blocks = 1;
    TR_trials_count = 0;
    tr_timing_good = 0;
    
    // the Routine "Creat_TR__new_StimSeq" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _TR_blocks_key_resp_allKeys;
var Instr_TR_blocksComponents;
function Instr_TR_blocksRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'Instr_TR_blocks'-------
    t = 0;
    Instr_TR_blocksClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    Instr_TR_blocks_num.setText((('Block ' + TR_block_num) + '\nPress any key to start'));
    TR_blocks_key_resp.keys = undefined;
    TR_blocks_key_resp.rt = undefined;
    _TR_blocks_key_resp_allKeys = [];
    // keep track of which components have finished
    Instr_TR_blocksComponents = [];
    Instr_TR_blocksComponents.push(Instr_TR_blocks_num);
    Instr_TR_blocksComponents.push(TR_blocks_key_resp);
    
    for (const thisComponent of Instr_TR_blocksComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function Instr_TR_blocksRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'Instr_TR_blocks'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = Instr_TR_blocksClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Instr_TR_blocks_num* updates
    if (t >= 0.0 && Instr_TR_blocks_num.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Instr_TR_blocks_num.tStart = t;  // (not accounting for frame time here)
      Instr_TR_blocks_num.frameNStart = frameN;  // exact frame index
      
      Instr_TR_blocks_num.setAutoDraw(true);
    }

    
    // *TR_blocks_key_resp* updates
    if (t >= 0.0 && TR_blocks_key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      TR_blocks_key_resp.tStart = t;  // (not accounting for frame time here)
      TR_blocks_key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { TR_blocks_key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { TR_blocks_key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { TR_blocks_key_resp.clearEvents(); });
    }

    if (TR_blocks_key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = TR_blocks_key_resp.getKeys({keyList: ['h', 'u', 'i', 'l'], waitRelease: false});
      _TR_blocks_key_resp_allKeys = _TR_blocks_key_resp_allKeys.concat(theseKeys);
      if (_TR_blocks_key_resp_allKeys.length > 0) {
        TR_blocks_key_resp.keys = _TR_blocks_key_resp_allKeys[0].name;  // just the first key pressed
        TR_blocks_key_resp.rt = _TR_blocks_key_resp_allKeys[0].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Instr_TR_blocksComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Instr_TR_blocksRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'Instr_TR_blocks'-------
    for (const thisComponent of Instr_TR_blocksComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('TR_blocks_key_resp.keys', TR_blocks_key_resp.keys);
    if (typeof TR_blocks_key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('TR_blocks_key_resp.rt', TR_blocks_key_resp.rt);
        routineTimer.reset();
        }
    
    TR_blocks_key_resp.stop();
    // the Routine "Instr_TR_blocks" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var TR_Load_Stim_TrialsComponents;
function TR_Load_Stim_TrialsRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'TR_Load_Stim_Trials'-------
    t = 0;
    TR_Load_Stim_TrialsClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    stim_item = TR_Stim_seq[TR_trials_count];
    finger_item = TR_Finger_seq[TR_trials_count];
    image_item = TR_Image_seq[TR_trials_count];
    image_r_item = TR_Image_r_seq[TR_trials_count];
    image_g_item = TR_Image_g_seq[TR_trials_count];
    start_time = ((Math.random() * 1.3) + 0.3);
    prep_time = ((time_limit - 0.2) - start_time);
    psychoJS.experiment.addData("TR_prep_time", prep_time);
    psychoJS.experiment.addData("StimIndex", stim_item);
    psychoJS.experiment.addData("Finger", finger_item);
    psychoJS.experiment.addData("Shape", image_item);
    psychoJS.experiment.addData("Block_Type", "TR");
    psychoJS.experiment.addData("Remap", 1);
    psychoJS.experiment.addData("TR_trials_count", TR_trials_count);
    
    // keep track of which components have finished
    TR_Load_Stim_TrialsComponents = [];
    
    for (const thisComponent of TR_Load_Stim_TrialsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function TR_Load_Stim_TrialsRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'TR_Load_Stim_Trials'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = TR_Load_Stim_TrialsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of TR_Load_Stim_TrialsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function TR_Load_Stim_TrialsRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'TR_Load_Stim_Trials'-------
    for (const thisComponent of TR_Load_Stim_TrialsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "TR_Load_Stim_Trials" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _TR_key_press_allKeys;
var TR_enter_trialsComponents;
function TR_enter_trialsRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'TR_enter_trials'-------
    t = 0;
    TR_enter_trialsClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    routineTimer.reset(time_limit);
    TR_key_press.early = 0;
    TR_key_press.late = 0;
    TR_key_press.tooearly = 0;
    TR_key_press.toolate = 0;
    TR_penalty = 0;
    TR_feedback = 0;
    
    TR_stim_image.setImage(image_item);
    TR_key_press.keys = undefined;
    TR_key_press.rt = undefined;
    _TR_key_press_allKeys = [];
    // keep track of which components have finished
    TR_enter_trialsComponents = [];
    TR_enter_trialsComponents.push(TR_circle);
    TR_enter_trialsComponents.push(TR_cicle_frame);
    TR_enter_trialsComponents.push(TR_stim_image);
    TR_enter_trialsComponents.push(TR_key_press);
    
    for (const thisComponent of TR_enter_trialsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function TR_enter_trialsRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'TR_enter_trials'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = TR_enter_trialsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *TR_circle* updates
    if (t >= 0.0 && TR_circle.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      TR_circle.tStart = t;  // (not accounting for frame time here)
      TR_circle.frameNStart = frameN;  // exact frame index
      
      TR_circle.setAutoDraw(true);
      TR_cicle_frame.setAutoDraw(true);
    }

    frameRemains = time_limit  - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (TR_circle.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      TR_circle.setAutoDraw(false);
    }
    
    if (TR_circle.status === PsychoJS.Status.STARTED){ // only update if being drawn
      TR_circle.setSize([(0.275 + (0.2 * routineTimer.getTime())), (0.275 + (0.2 * routineTimer.getTime()))]);
      //TR_circle.setRadius(0.1375 + (0.1 * routineTimer.getTime()));
      TR_cicle_frame.refresh();
      TR_stim_image.refresh();
    }
    
    frameRemains = time_limit  - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (TR_cicle_frame.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      TR_cicle_frame.setAutoDraw(false);
    }
    
    // *TR_stim_image* updates
    if (t >= start_time && TR_stim_image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      TR_stim_image.tStart = t;  // (not accounting for frame time here)
      TR_stim_image.frameNStart = frameN;  // exact frame index
      
      TR_stim_image.setAutoDraw(true);
    }

    frameRemains = time_limit  - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (TR_stim_image.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      TR_stim_image.setAutoDraw(false);
    }
    
    // *TR_key_press* updates
    if (t >= 0.0 && TR_key_press.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      TR_key_press.tStart = t;  // (not accounting for frame time here)
      TR_key_press.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { TR_key_press.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { TR_key_press.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { TR_key_press.clearEvents(); });
    }

    frameRemains = time_limit  - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (TR_key_press.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      TR_key_press.status = PsychoJS.Status.FINISHED;
  }

    if (TR_key_press.status === PsychoJS.Status.STARTED) {
      let theseKeys = TR_key_press.getKeys({keyList: ['h', 'u', 'i', 'l'], waitRelease: false});
      _TR_key_press_allKeys = _TR_key_press_allKeys.concat(theseKeys);
      if (_TR_key_press_allKeys.length > 0) {
        TR_key_press.keys = _TR_key_press_allKeys[0].name;  // just the first key pressed
        TR_key_press.rt = _TR_key_press_allKeys[0].rt;
        // was this correct?
        if (TR_key_press.keys == finger_item) {
            TR_key_press.corr = 1;
        } else {
            TR_key_press.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of TR_enter_trialsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var TR_feedback_color;
var TR_feedback_duration;
function TR_enter_trialsRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'TR_enter_trials'-------
    for (const thisComponent of TR_enter_trialsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    if ((TR_key_press.keys != null)) {
        if (TR_key_press.corr) {
            image_item_feedback = image_g_item;
            TR_feedback_color = [(- 1), 1, (- 1)];
        } else {
            image_item_feedback = image_r_item;
            TR_feedback_color = [1, (- 1), (- 1)];
        }
        if ((TR_key_press.rt < ((time_limit - 0.2) - 0.3))) {
            TR_key_press.tooearly = 1;
            TR_penalty = 1;
        } else {
            TR_feedback = 1;
            tr_timing_good = (tr_timing_good + 1);
            if ((TR_key_press.rt < ((time_limit - 0.2) - timing_tol_early))) {
                TR_key_press.early = 1;
            } else {
                if ((TR_key_press.rt > ((time_limit - 0.2) + timing_tol_late))) {
                    TR_key_press.late = 1;
                }
            }
        }
    } else {
        TR_key_press.toolate = 1;
        TR_penalty = 1;
    }
    TR_feedback_duration = 0.3;
    if ((TR_penalty === 1)) {
        if ((TR_key_press.toolate === 1)) {
            TR_penalty_text = `no response or you responded way too late.
    2 second penalty.
    After 2 second, press any key to continue.`
    ;
        } else {
            if ((TR_key_press.tooearly === 1)) {
                TR_penalty_text = `You responded way too early,
    2 second penalty.
    After 2 second, press any key to continue.`
    ;
            }
        }
    } else {
        if ((TR_feedback === 1)) {
            if ((TR_key_press.late === 1)) {
                TR_feedback_text = `little late`;
                TR_feedback_text_color = [1, (- 1), (- 1)];
            } else {
                if ((TR_key_press.early === 1)) {
                    TR_feedback_text = `little early`;
                    TR_feedback_text_color = [1, (- 1), (- 1)];
                } else {
                    TR_feedback_text = `good timing`;
                    TR_feedback_text_color = [(- 1), 1, (- 1)];
                }
            }
        }
    }
    
    // was no response the correct answer?!
    if (TR_key_press.keys === undefined) {
      if (['None','none',undefined].includes(finger_item)) {
         TR_key_press.corr = 1;  // correct non-response
      } else {
         TR_key_press.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for thisExp (ExperimentHandler)
    psychoJS.experiment.addData('TR_key_press.keys', TR_key_press.keys);
    psychoJS.experiment.addData('TR_key_press.corr', TR_key_press.corr);
    if (typeof TR_key_press.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('TR_key_press.rt', TR_key_press.rt);
        routineTimer.reset();
        }
    
    TR_key_press.stop();
    // the Routine "TR_enter_trials" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var TR_feedbackComponents;
function TR_feedbackRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'TR_feedback'-------
    t = 0;
    TR_feedbackClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    TR_feedback_circle.setLineColor(new util.Color(circle_frame_color));
    TR_feedback_image.setColor(new util.Color([1, 1, 1]));
    TR_feedback_image.setImage(image_item_feedback);
    TR_Feedback_text.setColor(new util.Color(TR_feedback_text_color));
    TR_Feedback_text.setText(TR_feedback_text);
    // keep track of which components have finished
    TR_feedbackComponents = [];
    TR_feedbackComponents.push(TR_feedback_circle);
    TR_feedbackComponents.push(TR_feedback_image);
    TR_feedbackComponents.push(TR_Feedback_text);
    
    for (const thisComponent of TR_feedbackComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function TR_feedbackRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'TR_feedback'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = TR_feedbackClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *TR_feedback_circle* updates
    if (t >= 0.0 && TR_feedback_circle.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      TR_feedback_circle.tStart = t;  // (not accounting for frame time here)
      TR_feedback_circle.frameNStart = frameN;  // exact frame index
      
      TR_feedback_circle.setAutoDraw(true);
    }

    frameRemains = 0.0 + TR_feedback_duration - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (TR_feedback_circle.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      TR_feedback_circle.setAutoDraw(false);
    }
    
    // *TR_feedback_image* updates
    if (t >= 0.0 && TR_feedback_image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      TR_feedback_image.tStart = t;  // (not accounting for frame time here)
      TR_feedback_image.frameNStart = frameN;  // exact frame index
      
      TR_feedback_image.setAutoDraw(true);
    }

    frameRemains = 0.0 + TR_feedback_duration - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (TR_feedback_image.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      TR_feedback_image.setAutoDraw(false);
    }
    
    // *TR_Feedback_text* updates
    if (t >= 0.0 && TR_Feedback_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      TR_Feedback_text.tStart = t;  // (not accounting for frame time here)
      TR_Feedback_text.frameNStart = frameN;  // exact frame index
      
      TR_Feedback_text.setAutoDraw(true);
    }

    frameRemains = 0.0 + TR_feedback_duration - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (TR_Feedback_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      TR_Feedback_text.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of TR_feedbackComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function TR_feedbackRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'TR_feedback'-------
    for (const thisComponent of TR_feedbackComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "TR_feedback" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _TR_Penalty_symbol_key_press_allKeys;
var TR_PenaltyComponents;
function TR_PenaltyRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'TR_Penalty'-------
    t = 0;
    TR_PenaltyClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    TR_penalty_symbol.setText(TR_penalty_text);
    TR_Penalty_symbol_key_press.keys = undefined;
    TR_Penalty_symbol_key_press.rt = undefined;
    _TR_Penalty_symbol_key_press_allKeys = [];
    // keep track of which components have finished
    TR_PenaltyComponents = [];
    TR_PenaltyComponents.push(tr_circle_frame_penalty);
    TR_PenaltyComponents.push(TR_penalty_symbol);
    TR_PenaltyComponents.push(TR_Penalty_symbol_key_press);
    
    for (const thisComponent of TR_PenaltyComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function TR_PenaltyRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'TR_Penalty'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = TR_PenaltyClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *tr_circle_frame_penalty* updates
    if (t >= 0.0 && tr_circle_frame_penalty.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      tr_circle_frame_penalty.tStart = t;  // (not accounting for frame time here)
      tr_circle_frame_penalty.frameNStart = frameN;  // exact frame index
      
      tr_circle_frame_penalty.setAutoDraw(true);
    }

    
    // *TR_penalty_symbol* updates
    if (t >= 0.0 && TR_penalty_symbol.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      TR_penalty_symbol.tStart = t;  // (not accounting for frame time here)
      TR_penalty_symbol.frameNStart = frameN;  // exact frame index
      
      TR_penalty_symbol.setAutoDraw(true);
    }

    
    // *TR_Penalty_symbol_key_press* updates
    if (t >= 2 && TR_Penalty_symbol_key_press.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      TR_Penalty_symbol_key_press.tStart = t;  // (not accounting for frame time here)
      TR_Penalty_symbol_key_press.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { TR_Penalty_symbol_key_press.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { TR_Penalty_symbol_key_press.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { TR_Penalty_symbol_key_press.clearEvents(); });
    }

    if (TR_Penalty_symbol_key_press.status === PsychoJS.Status.STARTED) {
      let theseKeys = TR_Penalty_symbol_key_press.getKeys({keyList: ['h', 'u', 'i', 'l'], waitRelease: false});
      _TR_Penalty_symbol_key_press_allKeys = _TR_Penalty_symbol_key_press_allKeys.concat(theseKeys);
      if (_TR_Penalty_symbol_key_press_allKeys.length > 0) {
        TR_Penalty_symbol_key_press.keys = _TR_Penalty_symbol_key_press_allKeys[0].name;  // just the first key pressed
        TR_Penalty_symbol_key_press.rt = _TR_Penalty_symbol_key_press_allKeys[0].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of TR_PenaltyComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function TR_PenaltyRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'TR_Penalty'-------
    for (const thisComponent of TR_PenaltyComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('TR_Penalty_symbol_key_press.keys', TR_Penalty_symbol_key_press.keys);
    if (typeof TR_Penalty_symbol_key_press.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('TR_Penalty_symbol_key_press.rt', TR_Penalty_symbol_key_press.rt);
        routineTimer.reset();
        }
    
    TR_Penalty_symbol_key_press.stop();
    // the Routine "TR_Penalty" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var TR_after_trialsComponents;
function TR_after_trialsRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'TR_after_trials'-------
    t = 0;
    TR_after_trialsClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    // keep track of which components have finished
    TR_after_trialsComponents = [];
    
    for (const thisComponent of TR_after_trialsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function TR_after_trialsRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'TR_after_trials'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = TR_after_trialsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of TR_after_trialsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function TR_after_trialsRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'TR_after_trials'-------
    for (const thisComponent of TR_after_trialsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    if (((TR_trials_count > 0) && (((TR_trials_count + 1) % num_trials) === 0))) {
        TR_show_blocks = 1;
        TR_block_num = (TR_block_num + 1);
    } else {
        TR_show_blocks = 0;
    }
    TR_trials_count = (TR_trials_count + 1);
    
    // the Routine "TR_after_trials" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _ThankYouKey_allKeys;
var Thank_youComponents;
function Thank_youRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'Thank_you'-------
    t = 0;
    Thank_youClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    ThankYouKey.keys = undefined;
    ThankYouKey.rt = undefined;
    _ThankYouKey_allKeys = [];
    // keep track of which components have finished
    Thank_youComponents = [];
    Thank_youComponents.push(ThankYou);
    Thank_youComponents.push(ThankYouKey);
    
    for (const thisComponent of Thank_youComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function Thank_youRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'Thank_you'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = Thank_youClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *ThankYou* updates
    if (t >= 0.0 && ThankYou.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ThankYou.tStart = t;  // (not accounting for frame time here)
      ThankYou.frameNStart = frameN;  // exact frame index
      
      ThankYou.setAutoDraw(true);
    }

    
    // *ThankYouKey* updates
    if (t >= 0.0 && ThankYouKey.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ThankYouKey.tStart = t;  // (not accounting for frame time here)
      ThankYouKey.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { ThankYouKey.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { ThankYouKey.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { ThankYouKey.clearEvents(); });
    }

    if (ThankYouKey.status === PsychoJS.Status.STARTED) {
      let theseKeys = ThankYouKey.getKeys({keyList: ['space'], waitRelease: false});
      _ThankYouKey_allKeys = _ThankYouKey_allKeys.concat(theseKeys);
      if (_ThankYouKey_allKeys.length > 0) {
        ThankYouKey.keys = _ThankYouKey_allKeys[0].name;  // just the first key pressed
        ThankYouKey.rt = _ThankYouKey_allKeys[0].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Thank_youComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Thank_youRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'Thank_you'-------
    for (const thisComponent of Thank_youComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('ThankYouKey.keys', ThankYouKey.keys);
    if (typeof ThankYouKey.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('ThankYouKey.rt', ThankYouKey.rt);
        routineTimer.reset();
        }
    
    ThankYouKey.stop();
    // the Routine "Thank_you" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


function endLoopIteration(thisScheduler, loop) {
  // ------Prepare for next entry------
  return function () {
    if (typeof loop !== 'undefined') {
      // ------Check if user ended loop early------
      if (loop.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(loop);
        }
      thisScheduler.stop();
      } else {
        const thisTrial = loop.getCurrentTrial();
        if (typeof thisTrial === 'undefined' || !('isTrials' in thisTrial) || thisTrial.isTrials) {
          psychoJS.experiment.nextEntry(loop);
        }
      }
    return Scheduler.Event.NEXT;
    }
  };
}


function importConditions(trials) {
  return function () {
    psychoJS.importAttributes(trials.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
