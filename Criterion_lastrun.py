#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
This experiment was created using PsychoPy3 Experiment Builder (v2020.1.3),
    on June 08, 2020, at 23:16
If you publish work using this script the most relevant publication is:

    Peirce J, Gray JR, Simpson S, MacAskill M, Höchenberger R, Sogo H, Kastman E, Lindeløv JK. (2019) 
        PsychoPy2: Experiments in behavior made easy Behav Res 51: 195. 
        https://doi.org/10.3758/s13428-018-01193-y

"""

from __future__ import absolute_import, division

from psychopy import locale_setup
from psychopy import prefs
from psychopy import sound, gui, visual, core, data, event, logging, clock
from psychopy.constants import (NOT_STARTED, STARTED, PLAYING, PAUSED,
                                STOPPED, FINISHED, PRESSED, RELEASED, FOREVER)

import numpy as np  # whole numpy lib is available, prepend 'np.'
from numpy import (sin, cos, tan, log, log10, pi, average,
                   sqrt, std, deg2rad, rad2deg, linspace, asarray)
from numpy.random import random, randint, normal, shuffle
import os  # handy system and path functions
import sys  # to get file system encoding

from psychopy.hardware import keyboard



# Ensure that relative paths start from the same directory as this script
_thisDir = os.path.dirname(os.path.abspath(__file__))
os.chdir(_thisDir)

# Store info about the experiment session
psychopyVersion = '2020.1.3'
expName = 'Criterion'  # from the Builder filename that created this script
expInfo = {'participant': '', 'session': '001'}
dlg = gui.DlgFromDict(dictionary=expInfo, sortKeys=False, title=expName)
if dlg.OK == False:
    core.quit()  # user pressed cancel
expInfo['date'] = data.getDateStr()  # add a simple timestamp
expInfo['expName'] = expName
expInfo['psychopyVersion'] = psychopyVersion

# Data file name stem = absolute path + name; later add .psyexp, .csv, .log, etc
filename = _thisDir + os.sep + u'data/%s_%s_%s' % (expInfo['participant'], expName, expInfo['date'])

# An ExperimentHandler isn't essential but helps with data saving
thisExp = data.ExperimentHandler(name=expName, version='',
    extraInfo=expInfo, runtimeInfo=None,
    originPath='D:\\Project\\Online\\Pilot\\Pilot\\Criterion_lastrun.py',
    savePickle=True, saveWideText=True,
    dataFileName=filename)
# save a log file for detail verbose info
logFile = logging.LogFile(filename+'.log', level=logging.EXP)
logging.console.setLevel(logging.WARNING)  # this outputs to the screen, not a file

endExpNow = False  # flag for 'escape' or other condition => quit the exp
frameTolerance = 0.001  # how close to onset before 'same' frame

# Start Code - component code to be run before the window creation

# Setup the Window
win = visual.Window(
    size=[1280, 720], fullscr=True, screen=1, 
    winType='pyglet', allowGUI=False, allowStencil=False,
    monitor='testMonitor', color=[-1,-1,-1], colorSpace='rgb',
    blendMode='avg', useFBO=True, 
    units='height')
# store frame rate of monitor if we can measure it
expInfo['frameRate'] = win.getActualFrameRate()
if expInfo['frameRate'] != None:
    frameDur = 1.0 / round(expInfo['frameRate'])
else:
    frameDur = 1.0 / 60.0  # could not measure, so guess

# create a default keyboard (e.g. to check for escape)
defaultKeyboard = keyboard.Keyboard()

# Initialize components for Routine "Instr_CR"
Instr_CRClock = core.Clock()
Instr_CR_text = visual.TextStim(win=win, name='Instr_CR_text',
    text='There will be four symbols showing on the screen, one at a time.\nEach of them maps onto one keys from (h,u,i,l).\n\nYour job is to figure out the map.\n\nThink before you press the key. \nThe accuracy is the priority.\n\nThe more mistaks you make, the longer this block will be.',
    font='Arial',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
Instr_CR_press = keyboard.Keyboard()

# Initialize components for Routine "CR_enter_trial"
CR_enter_trialClock = core.Clock()
circle_frame = visual.Polygon(
    win=win, name='circle_frame',
    edges=1000, size=(0.3, 0.3),
    ori=0, pos=(0, 0),
    lineWidth=10, lineColor=[1,1,1], lineColorSpace='rgb',
    fillColor=[-1,-1,-1], fillColorSpace='rgb',
    opacity=1, depth=0.0, interpolate=True)
stim_image = visual.ImageStim(
    win=win,
    name='stim_image', 
    image='sin', mask=None,
    ori=0, pos=(0, 0), size=(0.25, 0.25),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=False, depth=-1.0)
CR_key_press = keyboard.Keyboard()

# Initialize components for Routine "Cr_feedback"
Cr_feedbackClock = core.Clock()
feedback_circle = visual.Polygon(
    win=win, name='feedback_circle',
    edges=1000, size=(0.3, 0.3),
    ori=0, pos=(0, 0),
    lineWidth=10, lineColor=1.0, lineColorSpace='rgb',
    fillColor=[-1,-1,-1], fillColorSpace='rgb',
    opacity=1, depth=0.0, interpolate=True)
feedback_image = visual.ImageStim(
    win=win,
    name='feedback_image', 
    image='sin', mask=None,
    ori=0, pos=(0, 0), size=(0.25, 0.25),
    color='white', colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=False, depth=-1.0)

# Create some handy timers
globalClock = core.Clock()  # to track the time since experiment started
routineTimer = core.CountdownTimer()  # to track time remaining of each (non-slip) routine 

# ------Prepare to start Routine "Instr_CR"-------
continueRoutine = True
# update component parameters for each repeat
Instr_CR_press.keys = []
Instr_CR_press.rt = []
_Instr_CR_press_allKeys = []
# keep track of which components have finished
Instr_CRComponents = [Instr_CR_text, Instr_CR_press]
for thisComponent in Instr_CRComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
Instr_CRClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "Instr_CR"-------
while continueRoutine:
    # get current time
    t = Instr_CRClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=Instr_CRClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *Instr_CR_text* updates
    if Instr_CR_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        Instr_CR_text.frameNStart = frameN  # exact frame index
        Instr_CR_text.tStart = t  # local t and not account for scr refresh
        Instr_CR_text.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(Instr_CR_text, 'tStartRefresh')  # time at next scr refresh
        Instr_CR_text.setAutoDraw(True)
    
    # *Instr_CR_press* updates
    waitOnFlip = False
    if Instr_CR_press.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        Instr_CR_press.frameNStart = frameN  # exact frame index
        Instr_CR_press.tStart = t  # local t and not account for scr refresh
        Instr_CR_press.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(Instr_CR_press, 'tStartRefresh')  # time at next scr refresh
        Instr_CR_press.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(Instr_CR_press.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(Instr_CR_press.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if Instr_CR_press.status == STARTED and not waitOnFlip:
        theseKeys = Instr_CR_press.getKeys(keyList=['h', 'u', 'i', 'l'], waitRelease=False)
        _Instr_CR_press_allKeys.extend(theseKeys)
        if len(_Instr_CR_press_allKeys):
            Instr_CR_press.keys = _Instr_CR_press_allKeys[-1].name  # just the last key pressed
            Instr_CR_press.rt = _Instr_CR_press_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in Instr_CRComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "Instr_CR"-------
for thisComponent in Instr_CRComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('Instr_CR_text.started', Instr_CR_text.tStartRefresh)
thisExp.addData('Instr_CR_text.stopped', Instr_CR_text.tStopRefresh)
# check responses
if Instr_CR_press.keys in ['', [], None]:  # No response was made
    Instr_CR_press.keys = None
thisExp.addData('Instr_CR_press.keys',Instr_CR_press.keys)
if Instr_CR_press.keys != None:  # we had a response
    thisExp.addData('Instr_CR_press.rt', Instr_CR_press.rt)
thisExp.addData('Instr_CR_press.started', Instr_CR_press.tStartRefresh)
thisExp.addData('Instr_CR_press.stopped', Instr_CR_press.tStopRefresh)
thisExp.nextEntry()
# the Routine "Instr_CR" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
CR_trials = data.TrialHandler(nReps=1, method='random', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('conditions.xlsx'),
    seed=None, name='CR_trials')
thisExp.addLoop(CR_trials)  # add the loop to the experiment
thisCR_trial = CR_trials.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisCR_trial.rgb)
if thisCR_trial != None:
    for paramName in thisCR_trial:
        exec('{} = thisCR_trial[paramName]'.format(paramName))

for thisCR_trial in CR_trials:
    currentLoop = CR_trials
    # abbreviate parameter names if possible (e.g. rgb = thisCR_trial.rgb)
    if thisCR_trial != None:
        for paramName in thisCR_trial:
            exec('{} = thisCR_trial[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "CR_enter_trial"-------
    continueRoutine = True
    # update component parameters for each repeat
    stim_image.setImage(imStim)
    CR_key_press.keys = []
    CR_key_press.rt = []
    _CR_key_press_allKeys = []
    # keep track of which components have finished
    CR_enter_trialComponents = [circle_frame, stim_image, CR_key_press]
    for thisComponent in CR_enter_trialComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    CR_enter_trialClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "CR_enter_trial"-------
    while continueRoutine:
        # get current time
        t = CR_enter_trialClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=CR_enter_trialClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *circle_frame* updates
        if circle_frame.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            circle_frame.frameNStart = frameN  # exact frame index
            circle_frame.tStart = t  # local t and not account for scr refresh
            circle_frame.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(circle_frame, 'tStartRefresh')  # time at next scr refresh
            circle_frame.setAutoDraw(True)
        
        # *stim_image* updates
        if stim_image.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            stim_image.frameNStart = frameN  # exact frame index
            stim_image.tStart = t  # local t and not account for scr refresh
            stim_image.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(stim_image, 'tStartRefresh')  # time at next scr refresh
            stim_image.setAutoDraw(True)
        
        # *CR_key_press* updates
        waitOnFlip = False
        if CR_key_press.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            CR_key_press.frameNStart = frameN  # exact frame index
            CR_key_press.tStart = t  # local t and not account for scr refresh
            CR_key_press.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(CR_key_press, 'tStartRefresh')  # time at next scr refresh
            CR_key_press.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(CR_key_press.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(CR_key_press.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if CR_key_press.status == STARTED and not waitOnFlip:
            theseKeys = CR_key_press.getKeys(keyList=['h', 'u', 'i', 'l'], waitRelease=False)
            _CR_key_press_allKeys.extend(theseKeys)
            if len(_CR_key_press_allKeys):
                CR_key_press.keys = [key.name for key in _CR_key_press_allKeys]  # storing all keys
                CR_key_press.rt = [key.rt for key in _CR_key_press_allKeys]
                # was this correct?
                if (CR_key_press.keys == str(CorrResp)) or (CR_key_press.keys == CorrResp):
                    CR_key_press.corr = 1
                else:
                    CR_key_press.corr = 0
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in CR_enter_trialComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "CR_enter_trial"-------
    for thisComponent in CR_enter_trialComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    CR_trials.addData('circle_frame.started', circle_frame.tStartRefresh)
    CR_trials.addData('circle_frame.stopped', circle_frame.tStopRefresh)
    CR_trials.addData('stim_image.started', stim_image.tStartRefresh)
    CR_trials.addData('stim_image.stopped', stim_image.tStopRefresh)
    # check responses
    if CR_key_press.keys in ['', [], None]:  # No response was made
        CR_key_press.keys = None
        # was no response the correct answer?!
        if str(CorrResp).lower() == 'none':
           CR_key_press.corr = 1;  # correct non-response
        else:
           CR_key_press.corr = 0;  # failed to respond (incorrectly)
    # store data for CR_trials (TrialHandler)
    CR_trials.addData('CR_key_press.keys',CR_key_press.keys)
    CR_trials.addData('CR_key_press.corr', CR_key_press.corr)
    if CR_key_press.keys != None:  # we had a response
        CR_trials.addData('CR_key_press.rt', CR_key_press.rt)
    CR_trials.addData('CR_key_press.started', CR_key_press.tStartRefresh)
    CR_trials.addData('CR_key_press.stopped', CR_key_press.tStopRefresh)
    if CR_key_press.keys == ['h']:
        feedback_color = [1.0,-1,-1]
        CR_feedback_duration = 1
    else:
        feedback_color = [0.1,0.5,0.3]
        CR_feedback_duration = 0.3
    # the Routine "CR_enter_trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # ------Prepare to start Routine "Cr_feedback"-------
    continueRoutine = True
    # update component parameters for each repeat
    feedback_circle.setLineColor([1,1,1])
    feedback_image.setColor(feedback_color, colorSpace='rgb')
    feedback_image.setImage(imStim)
    # keep track of which components have finished
    Cr_feedbackComponents = [feedback_circle, feedback_image]
    for thisComponent in Cr_feedbackComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    Cr_feedbackClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "Cr_feedback"-------
    while continueRoutine:
        # get current time
        t = Cr_feedbackClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=Cr_feedbackClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *feedback_circle* updates
        if feedback_circle.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            feedback_circle.frameNStart = frameN  # exact frame index
            feedback_circle.tStart = t  # local t and not account for scr refresh
            feedback_circle.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(feedback_circle, 'tStartRefresh')  # time at next scr refresh
            feedback_circle.setAutoDraw(True)
        if feedback_circle.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > feedback_circle.tStartRefresh + CR_feedback_duration-frameTolerance:
                # keep track of stop time/frame for later
                feedback_circle.tStop = t  # not accounting for scr refresh
                feedback_circle.frameNStop = frameN  # exact frame index
                win.timeOnFlip(feedback_circle, 'tStopRefresh')  # time at next scr refresh
                feedback_circle.setAutoDraw(False)
        
        # *feedback_image* updates
        if feedback_image.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            feedback_image.frameNStart = frameN  # exact frame index
            feedback_image.tStart = t  # local t and not account for scr refresh
            feedback_image.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(feedback_image, 'tStartRefresh')  # time at next scr refresh
            feedback_image.setAutoDraw(True)
        if feedback_image.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > feedback_image.tStartRefresh + CR_feedback_duration-frameTolerance:
                # keep track of stop time/frame for later
                feedback_image.tStop = t  # not accounting for scr refresh
                feedback_image.frameNStop = frameN  # exact frame index
                win.timeOnFlip(feedback_image, 'tStopRefresh')  # time at next scr refresh
                feedback_image.setAutoDraw(False)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in Cr_feedbackComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "Cr_feedback"-------
    for thisComponent in Cr_feedbackComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    CR_trials.addData('feedback_circle.started', feedback_circle.tStartRefresh)
    CR_trials.addData('feedback_circle.stopped', feedback_circle.tStopRefresh)
    CR_trials.addData('feedback_image.started', feedback_image.tStartRefresh)
    CR_trials.addData('feedback_image.stopped', feedback_image.tStopRefresh)
    # the Routine "Cr_feedback" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    thisExp.nextEntry()
    
# completed 1 repeats of 'CR_trials'


# Flip one final time so any remaining win.callOnFlip() 
# and win.timeOnFlip() tasks get executed before quitting
win.flip()

# these shouldn't be strictly necessary (should auto-save)
thisExp.saveAsWideText(filename+'.csv')
thisExp.saveAsPickle(filename)
logging.flush()
# make sure everything is closed down
thisExp.abort()  # or data files will save again on exit
win.close()
core.quit()
