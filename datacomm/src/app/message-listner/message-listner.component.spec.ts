import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageListnerComponent } from './message-listner.component';

describe('MessageListnerComponent', () => {
  let component: MessageListnerComponent;
  let fixture: ComponentFixture<MessageListnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageListnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageListnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
