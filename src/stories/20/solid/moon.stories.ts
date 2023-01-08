import type { Meta, StoryObj } from '@storybook/svelte'
import { Moon as MoonSvelte } from '../../../lib/heroicons/20/solid'

const meta = {
	title: 'Mini',
	component: MoonSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<MoonSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Moon: Story = {}
