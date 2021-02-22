import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import GithubLogin from '../../src/components/GithubLogin.vue';

describe('GithubLogin.vue', () => {
  it('renders component', () => {
    const wrapper = shallowMount(GithubLogin);
    expect(wrapper.text()).to.include('Login with Github');
  });
});
