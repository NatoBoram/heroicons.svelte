import type { Meta, StoryObj } from '@storybook/svelte'
import { Radio as RadioSvelte } from '../../../lib/heroicons/20/solid'

const meta = {
	title: 'Mini',
	component: RadioSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<RadioSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Radio: Story = {}
