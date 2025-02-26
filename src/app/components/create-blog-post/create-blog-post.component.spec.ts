import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBlogPostComponent } from './create-blog-post.component';

describe('CreateBlogPostComponent', () => {
  let component: CreateBlogPostComponent;
  let fixture: ComponentFixture<CreateBlogPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateBlogPostComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateBlogPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
