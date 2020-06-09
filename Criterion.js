/****************** 
 * Criterion Test *
 ******************/

import { PsychoJS } from './lib/core-2020.1.js';
import * as core from './lib/core-2020.1.js';
import { TrialHandler } from './lib/data-2020.1.js';
import { Scheduler } from './lib/util-2020.1.js';
import * as util from './lib/util-2020.1.js';
import * as visual from './lib/visual-2020.1.js';
import * as sound from './lib/sound-2020.1.js';

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
let expName = 'Criterion';  // from the Builder filename that created this script
let expInfo = {'participant': '', 'session': '001'};

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
flowScheduler.add(Instr_CRRoutineBegin());
flowScheduler.add(Instr_CRRoutineEachFrame());
flowScheduler.add(Instr_CRRoutineEnd());
const CR_trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(CR_trialsLoopBegin, CR_trialsLoopScheduler);
flowScheduler.add(CR_trialsLoopScheduler);
flowScheduler.add(CR_trialsLoopEnd);
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    {'name': 'media/denb.png', 'path': './media/denb.png'},
    {'name': 'media/dcnb.png', 'path': './media/dcnb.png'},
    {'name': 'media/dbnb.png', 'path': './media/dbnb.png'},
    {'name': 'media/dgnb.png', 'path': './media/dgnb.png'},
    {'name': 'conditions.xlsx', 'path': './conditions.xlsx'},
    {'name': 'media/dhnb.png', 'path': './media/dhnb.png'},
    {'name': 'media/danb.png', 'path': './media/danb.png'},
    {'name': 'media/dfnb.png', 'path': './media/dfnb.png'},
    {'name': 'media/ddnb.png', 'path': './media/ddnb.png'}
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


var Instr_CRClock;
var Instr_CR_text;
var Instr_CR_press;
var CR_enter_trialClock;
var circle_frame;
var stim_image;
var CR_key_press;
var Cr_feedbackClock;
var feedback_circle;
var feedback_image;
var globalClock;
var routineTimer;
function experimentInit() {
  // Initialize components for Routine "Instr_CR"
  Instr_CRClock = new util.Clock();
  Instr_CR_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'Instr_CR_text',
    text: 'There will be four symbols showing on the screen, one at a time.\nEach of them maps onto one keys from (h,u,i,l).\n\nYour job is to figure out the map.\n\nThink before you press the key. \nThe accuracy is the priority.\n\nThe more mistaks you make, the longer this block will be.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  Instr_CR_press = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "CR_enter_trial"
  CR_enter_trialClock = new util.Clock();
  circle_frame = new visual.Polygon ({
    win: psychoJS.window, name: 'circle_frame', 
    edges: 1000, size:[0.3, 0.3],
    ori: 0, pos: [0, 0],
    lineWidth: 10, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([(- 1), (- 1), (- 1)]),
    opacity: 1, depth: 0, interpolate: true,
  });
  
  stim_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'stim_image', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.25, 0.25],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : false, depth : -1.0 
  });
  CR_key_press = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Cr_feedback"
  Cr_feedbackClock = new util.Clock();
  feedback_circle = new visual.Polygon ({
    win: psychoJS.window, name: 'feedback_circle', 
    edges: 1000, size:[0.3, 0.3],
    ori: 0, pos: [0, 0],
    lineWidth: 10, lineColor: new util.Color(1.0),
    fillColor: new util.Color([(- 1), (- 1), (- 1)]),
    opacity: 1, depth: 0, interpolate: true,
  });
  
  feedback_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'feedback_image', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.25, 0.25],
    color : new util.Color('white'), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : false, depth : -1.0 
  });
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var _Instr_CR_press_allKeys;
var Instr_CRComponents;
function Instr_CRRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'Instr_CR'-------
    t = 0;
    Instr_CRClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    Instr_CR_press.keys = undefined;
    Instr_CR_press.rt = undefined;
    _Instr_CR_press_allKeys = [];
    // keep track of which components have finished
    Instr_CRComponents = [];
    Instr_CRComponents.push(Instr_CR_text);
    Instr_CRComponents.push(Instr_CR_press);
    
    for (const thisComponent of Instr_CRComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


var continueRoutine;
function Instr_CRRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'Instr_CR'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = Instr_CRClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Instr_CR_text* updates
    if (t >= 0.0 && Instr_CR_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Instr_CR_text.tStart = t;  // (not accounting for frame time here)
      Instr_CR_text.frameNStart = frameN;  // exact frame index
      
      Instr_CR_text.setAutoDraw(true);
    }

    
    // *Instr_CR_press* updates
    if (t >= 0.0 && Instr_CR_press.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Instr_CR_press.tStart = t;  // (not accounting for frame time here)
      Instr_CR_press.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Instr_CR_press.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Instr_CR_press.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Instr_CR_press.clearEvents(); });
    }

    if (Instr_CR_press.status === PsychoJS.Status.STARTED) {
      let theseKeys = Instr_CR_press.getKeys({keyList: ['h', 'u', 'i', 'l'], waitRelease: false});
      _Instr_CR_press_allKeys = _Instr_CR_press_allKeys.concat(theseKeys);
      if (_Instr_CR_press_allKeys.length > 0) {
        Instr_CR_press.keys = _Instr_CR_press_allKeys[_Instr_CR_press_allKeys.length - 1].name;  // just the last key pressed
        Instr_CR_press.rt = _Instr_CR_press_allKeys[_Instr_CR_press_allKeys.length - 1].rt;
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
    for (const thisComponent of Instr_CRComponents)
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


function Instr_CRRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'Instr_CR'-------
    for (const thisComponent of Instr_CRComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Instr_CR_press.keys', Instr_CR_press.keys);
    if (typeof Instr_CR_press.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('Instr_CR_press.rt', Instr_CR_press.rt);
        routineTimer.reset();
        }
    
    Instr_CR_press.stop();
    // the Routine "Instr_CR" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var CR_trials;
var currentLoop;
function CR_trialsLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  CR_trials = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'conditions.xlsx',
    seed: undefined, name: 'CR_trials'
  });
  psychoJS.experiment.addLoop(CR_trials); // add the loop to the experiment
  currentLoop = CR_trials;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisCR_trial of CR_trials) {
    const snapshot = CR_trials.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(CR_enter_trialRoutineBegin(snapshot));
    thisScheduler.add(CR_enter_trialRoutineEachFrame(snapshot));
    thisScheduler.add(CR_enter_trialRoutineEnd(snapshot));
    thisScheduler.add(Cr_feedbackRoutineBegin(snapshot));
    thisScheduler.add(Cr_feedbackRoutineEachFrame(snapshot));
    thisScheduler.add(Cr_feedbackRoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function CR_trialsLoopEnd() {
  psychoJS.experiment.removeLoop(CR_trials);

  return Scheduler.Event.NEXT;
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
    stim_image.setImage(imStim);
    CR_key_press.keys = undefined;
    CR_key_press.rt = undefined;
    _CR_key_press_allKeys = [];
    // keep track of which components have finished
    CR_enter_trialComponents = [];
    CR_enter_trialComponents.push(circle_frame);
    CR_enter_trialComponents.push(stim_image);
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
    
    // *circle_frame* updates
    if (t >= 0.0 && circle_frame.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      circle_frame.tStart = t;  // (not accounting for frame time here)
      circle_frame.frameNStart = frameN;  // exact frame index
      
      circle_frame.setAutoDraw(true);
    }

    
    // *stim_image* updates
    if (t >= 0.0 && stim_image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stim_image.tStart = t;  // (not accounting for frame time here)
      stim_image.frameNStart = frameN;  // exact frame index
      
      stim_image.setAutoDraw(true);
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
        CR_key_press.keys = _CR_key_press_allKeys.map((key) => key.name);  // storing all keys
        CR_key_press.rt = _CR_key_press_allKeys.map((key) => key.rt);
        // was this correct?
        if (CR_key_press.keys == CorrResp) {
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


var feedback_color;
var CR_feedback_duration;
function CR_enter_trialRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'CR_enter_trial'-------
    for (const thisComponent of CR_enter_trialComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // was no response the correct answer?!
    if (CR_key_press.keys === undefined) {
      if (['None','none',undefined].includes(CorrResp)) {
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
    if ((CR_key_press.keys === ["h"])) {
        feedback_color = [1.0, (- 1), (- 1)];
        CR_feedback_duration = 1;
    } else {
        feedback_color = [0.1, 0.5, 0.3];
        CR_feedback_duration = 0.3;
    }
    
    // the Routine "CR_enter_trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var Cr_feedbackComponents;
function Cr_feedbackRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'Cr_feedback'-------
    t = 0;
    Cr_feedbackClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    feedback_circle.setLineColor(new util.Color([1, 1, 1]));
    feedback_image.setColor(new util.Color(feedback_color));
    feedback_image.setImage(imStim);
    // keep track of which components have finished
    Cr_feedbackComponents = [];
    Cr_feedbackComponents.push(feedback_circle);
    Cr_feedbackComponents.push(feedback_image);
    
    for (const thisComponent of Cr_feedbackComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


var frameRemains;
function Cr_feedbackRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'Cr_feedback'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = Cr_feedbackClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *feedback_circle* updates
    if (t >= 0.0 && feedback_circle.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback_circle.tStart = t;  // (not accounting for frame time here)
      feedback_circle.frameNStart = frameN;  // exact frame index
      
      feedback_circle.setAutoDraw(true);
    }

    frameRemains = 0.0 + CR_feedback_duration - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (feedback_circle.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      feedback_circle.setAutoDraw(false);
    }
    
    // *feedback_image* updates
    if (t >= 0.0 && feedback_image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback_image.tStart = t;  // (not accounting for frame time here)
      feedback_image.frameNStart = frameN;  // exact frame index
      
      feedback_image.setAutoDraw(true);
    }

    frameRemains = 0.0 + CR_feedback_duration - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (feedback_image.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      feedback_image.setAutoDraw(false);
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
    for (const thisComponent of Cr_feedbackComponents)
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


function Cr_feedbackRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'Cr_feedback'-------
    for (const thisComponent of Cr_feedbackComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "Cr_feedback" was not non-slip safe, so reset the non-slip timer
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
