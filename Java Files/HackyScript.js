1 /*THESE INSTRUCTIONS ARE DIFFERENT FROM PREVIOUS PROGRAM TEMPLATES.
  2 THIS IS NOT A FILL IN FOR EACH LINE, THEY ARE NOT DIRECTIONS.
  3 THESE COMMENTS ARE MAINLY SUGGESTIONS
  4 ON HOW TO WRITE UP THIS PROGRAM.  YOU CAN DO WHATEVER
  5 YOU SEEM FIT, AS LONG AS IT MEETS THE EXPECTATIONS EXPLAINED. */
  6
  7
  8
  9
 10 //Don't forget to import what you need
 11 import java.util.Scanner;
 12 import java.util.*;
 13
 14 public class Unit4ProjectTrouble_ONeill
 15 {
 16 public static void main (String args[])
 17 {
 18       //You might need some scanners and variables
 19       Scanner scrn = new Scanner(System.in);
 20       Scanner scan = new Scanner(System.in);
 21       //Don't forget the directions
 22       System.out.println("This is trouble. Players who get to 21 or higher win. How many players will be playing? 2-4");
 23       //initializing variables
 24       int winner = 1;
 25       int players = scrn.nextInt();
 26       int choice = players;
 27       int player1 = 0;
 28       int player2 = 0;
 29       int player3 = 0;
 30       int player4 = 0;
 31       String roll;
 32       int first = 1;
 33
 34       switch (choice)
 35       {
 36      case 2:
 37       roll = scrn.nextLine();
 38       System.out.println("When ready type roll to roll a 6 sided di. Largest number will go first");
 39       roll = scrn.nextLine();
 40       player1 = 0;
 41       player2 = 0;
 42
 43       if(roll.contains("roll"))
 44       {
 45       player1 += ((int)6*Math.random()+1);
 46       System.out.println("Player 1:" + player1);
 47       }
 48       System.out.println("When ready type roll to roll");
 49       roll = scrn.nextLine();
 50       player1 = 0;
 51       player2 = 0;
 52
 53       if(roll.contains("roll"))
 54       {
 55       player2 += ((int)6*Math.random()+1);
 56       System.out.println("Player 2:" + player2);
 57       }
 58       if(player1>player2)
 59       {
 60       System.out.println("Player 1 goes first");
 61       first = 1;
 62       }
 63       else
 64       {
 65       System.out.println("Player 2 goes first");
 66       first = 2;
 67       }
 68       break;
 69      case 3:
 70       roll = scrn.nextLine();
 71       System.out.println("When ready type roll to roll a 6 sided di. Largest number will go first");
 72       roll = scrn.nextLine();
 73       if(roll.contains("roll"))
 74       {
 75       player1 += ((int)6*Math.random()+1);
 76       System.out.println("Player 1:" + player1);
 77       }
 78       System.out.println("When ready type roll to roll");
 79       roll = scrn.nextLine();
 80       if(roll.contains("roll"))
 81       {
 82       player2 += ((int)6*Math.random()+1);
 83       System.out.println("Player 2:" + player2);
 84       }
 85       System.out.println("When ready type roll to roll");
 86       roll = scrn.nextLine();
 87       if(roll.contains("roll"))
 88       {
 89       player3 += ((int)6*Math.random()+1);
 90       System.out.println("Player 3:" + player3);
 91       }
 92       if(player1>=player2&&player1>=player3)
 93       {
 94       System.out.println("Player 1 goes first, player 2 second and player 3 third.");
 95       first = 1;
 96       }
 97       if(player2>=player1&&player2>=player3)
 98       {
 99       System.out.println("Player 2 goes first, player 1 second and player 3 third.");
100       first = 2;
101       }
102       if(player3>player1&&player3>=player2)
103       {
104       System.out.println("Player 3 goes first, player 1 second and player 2 third.");
105       first = 3;
106       }
107       break;
108
109      case 4:
110       roll = scrn.nextLine();
111       System.out.println("When ready type roll to roll a 6 sided di. Largest number will go first");
112       roll = scrn.nextLine();
113       player1 = 0;
114       player2 = 0;
115       player3 = 0;
116       player4 = 0;
117       if(roll.contains("roll"))
118       {
119       player1 += ((int)6*Math.random()+1);
120       System.out.println("Player 1:" + player1);
121       }
122       System.out.println("When ready type roll to roll");
123       roll = scrn.nextLine();
124       if(roll.contains("roll"))
125       {
126       player2 += ((int)6*Math.random()+1);
127       System.out.println("Player 2:" + player2);
128       }
129       System.out.println("When ready type roll to roll");
130       roll = scrn.nextLine();
131       if(roll.contains("roll"))
132       {
133       player3 += ((int)6*Math.random()+1);
134       System.out.println("Player 3:" + player3);
135       }
136       System.out.println("When ready type roll to roll");
137       roll = scrn.nextLine();
138       if(roll.contains("roll"))
139       {
140       player4 += ((int)6*Math.random()+1);
141       System.out.println("Player 4:" + player4);
142       if(player1>player2 && player1>player3 && player1>player4)
143       {
144       System.out.println("Player 1 goes first, player 2 goes second player 3 goes third player 4 goes fourth");
145       first = 1;
146       }
147       if(player2>player1 && player2>player3 && player2>player4)
148       {
149       System.out.println("Player 2 goes first, player 1 goes second player 3 goes third player 4 goes fourth");
150       first = 2;
151       }
152       if(player3>player1 && player3>player2 && player3>player4)
153       {
154       System.out.println("Player 3 goes first, player 1 goes second player 2 goes third player 4 goes fourth");
155       first = 3;
156       }
157       if(player4>player1 && player4>player2 && player4>player3)
158       {
159       System.out.println("Player 4 goes first, player 1 goes second player 2 goes third player 3 goes fourth");
160       first = 4;
161       }
162       break;
163       }
164       }
165
166       player1 = 0;
167       player2 = 0;
168       player3 = 0;
169       player4 = 0;
170       //Who had the (first) biggest roll if there are two players?
171          //Be sure to tell the players who goes first
172
173       //Who had the (first) biggest roll if there are three players?
174          //Be sure to tell the players who goes first
175
176       //Who had the (first) biggest roll if there are four players?
177          //Be sure to tell the players who goes first
178
179
180    //While everyone's score is less than 21
181
182    while(player1 < 21 && player2 < 21 && player3 < 21 && player4 < 21)
183    { //DO NOT TOUCH(Beginning While Loop)
184    if(choice == 2)
185       {
186       if(first == 1)
187       {
188       System.out.println("type roll to roll");
189       roll = scrn.nextLine();
190       if(roll.contains("roll"))
191       {
192       player1 += ((int)6*Math.random()+1);
193       System.out.println("player 1:" + player1);
194       System.out.println("type roll to roll");
195       roll = scrn.nextLine();
196       if(roll.contains("roll"))
197       {
198       player2 += ((int)6*Math.random()+1);
199       System.out.println("player 2:" + player2);
200       }
201       }
202       }
203       if (first == 2)
204       {
205       System.out.println("type roll to roll");
206       roll = scrn.nextLine();
207
208       if(roll.contains("roll"))
209       {
210       player2 += ((int)6*Math.random()+1);
211       System.out.println("player 2:" + player2);
212       System.out.println("type roll to roll");
213       roll = scrn.nextLine();
214       if(roll.contains("roll"))
215       {
216       player1 += ((int)6*Math.random()+1);
217       System.out.println("player 1:" + player1);
218       }
219       }
220       }
221       }
222    if (choice == 3)
223       {
224       System.out.println("type roll to roll");
225       roll = scrn.nextLine();
226       if(roll.contains("roll"))
227       {
228       if (first == 1)
229       {
230       player1 += ((int)6*Math.random()+1);
231       System.out.println("player 1:" + player1);
232       System.out.println("type roll to roll");
233       roll = scrn.nextLine();
234       if(roll.contains("roll"))
235       {
236       player2 += ((int)6*Math.random()+1);
237       System.out.println("player 2:" + player2);
238       }
239       System.out.println("type roll to roll");
240       roll = scrn.nextLine();
241       if(roll.contains("roll"))
242       {
243       player3 += ((int)6*Math.random()+1);
244       System.out.println("player 3:" + player3);
245       }
246       }
247       if (first == 2)
248       {
249       player2 += ((int)6*Math.random()+1);
250       System.out.println("player 2:" + player2);
251       System.out.println("type roll to roll");
252       roll = scrn.nextLine();
253       if(roll.contains("roll"))
254       {
255       player1 += ((int)6*Math.random()+1);
256       System.out.println("player 1:" + player1);
257       }
258       System.out.println("type roll to roll");
259       roll = scrn.nextLine();
260       if(roll.contains("roll"))
261       {
262       player3 += ((int)6*Math.random()+1);
263       System.out.println("player 3:" + player3);
264       }
265
266       }
267       if (first == 3)
268       {
269       player3 += ((int)6*Math.random()+1);
270       System.out.println("player 3:" + player3);
271       System.out.println("type roll to roll");
272       roll = scrn.nextLine();
273       if(roll.contains("roll"))
274       {
275       player1 += ((int)6*Math.random()+1);
276       System.out.println("player 1:" + player1);
277       }
278       System.out.println("type roll to roll");
279       roll = scrn.nextLine();
280       if(roll.contains("roll"))
281       {
282       player2 += ((int)6*Math.random()+1);
283       System.out.println("player 2:" + player2);
284       }
285
286       }
287       }
288       }
289    if (choice == 4)
290       {
291       System.out.println("type roll to roll");
292       roll = scrn.nextLine();
293       if(roll.contains("roll"))
294       {
295       if (first == 1)
296       {
297       player1 += ((int)6*Math.random()+1);
298       System.out.println("player 1:" + player1);
299       System.out.println("type roll to roll");
300       roll = scrn.nextLine();
301       if(roll.contains("roll"))
302       {
303       player2 += ((int)6*Math.random()+1);
304       System.out.println("player 2:" + player2);
305       }
306       System.out.println("type roll to roll");
307       roll = scrn.nextLine();
308       if(roll.contains("roll"))
309       {
310       player3 += ((int)6*Math.random()+1);
311       System.out.println("player 3:" + player3);
312       }
313       System.out.println("type roll to roll");
314       roll = scrn.nextLine();
315       if(roll.contains("roll"))
316       {
317       player4 += ((int)6*Math.random()+1);
318       System.out.println("player 4:" + player4);
319       }
320
321       }
322       if (first == 2)
323       {
324       player2 += ((int)6*Math.random()+1);
325       System.out.println("player 2:" + player2);
326       System.out.println("type roll to roll");
327       roll = scrn.nextLine();
328       if(roll.contains("roll"))
329       {
330       player1 += ((int)6*Math.random()+1);
331       System.out.println("player 1:" + player1);
332       }
333       System.out.println("type roll to roll");
334       roll = scrn.nextLine();
335       if(roll.contains("roll"))
336       {
337       player3 += ((int)6*Math.random()+1);
338       System.out.println("player 3:" + player3);
339       }
340       System.out.println("type roll to roll");
341       roll = scrn.nextLine();
342       if(roll.contains("roll"))
343       {
344       player4 += ((int)6*Math.random()+1);
345       System.out.println("player 4:" + player4);
346       }
347
348       }
349       if (first == 3)
350       {
351       player3 += ((int)6*Math.random()+1);
352       System.out.println("player 3:" + player3);
353       System.out.println("type roll to roll");
354       roll = scrn.nextLine();
355       if(roll.contains("roll"))
356       {
357       player1 += ((int)6*Math.random()+1);
358       System.out.println("player 1:" + player1);
359       }
360       System.out.println("type roll to roll");
361       roll = scrn.nextLine();
362       if(roll.contains("roll"))
363       {
364       player2 += ((int)6*Math.random()+1);
365       System.out.println("player 2:" + player2);
366       }
367       System.out.println("type roll to roll");
368       roll = scrn.nextLine();
369       if(roll.contains("roll"))
370       {
371       player4 += ((int)6*Math.random()+1);
372       System.out.println("player 4:" + player4);
373       }
374
375       }
376       if (first == 4)
377       {
378       player4 += ((int)6*Math.random()+1);
379       System.out.println("player 4:" + player4);
380       System.out.println("type roll to roll");
381       roll = scrn.nextLine();
382       if(roll.contains("roll"))
383       {
384       player1 += ((int)6*Math.random()+1);
385       System.out.println("player 1:" + player1);
386       }
387       System.out.println("type roll to roll");
388       roll = scrn.nextLine();
389       if(roll.contains("roll"))
390       {
391       player2 += ((int)6*Math.random()+1);
392       System.out.println("player 2:" + player2);
393       }
394       System.out.println("type roll to roll");
395       roll = scrn.nextLine();
396       if(roll.contains("roll"))
397       {
398       player3 += ((int)6*Math.random()+1);
399       System.out.println("player 3:" + player3);
400       }
401
402       }
403       }
404       }
405       //If you have two players, GET THEIR ROLLS AND ACCUMULATE THEIR SCORES.
406
407       //If you have three players, GET THEIR ROLLS AND ACCUMULATE THEIR SCORES.
408
409       //If you have four players, GET THEIR ROLLS AND ACCUMULATE THEIR SCORES.
410
411    }//DO NOT TOUCH (Ending While Loop)
412       if(player1>20)
413       {
414       winner = 1;
415       }
416       if(player2>20)
417       {
418       winner = 2;
419       }
420       if(player3>20)
421       {
422       winner = 3;
423       }
424       if(player4>20)
425       {
426       winner = 4;
427       }
428
429    System.out.println("Player " + winner + "wins");
430
431    //Who WON?  Tell the players!
432
433
434 }
435 }