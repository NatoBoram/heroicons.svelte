import type { Meta, StoryObj } from '@storybook/svelte'
import { PhoneXMark as PhoneXMarkSvelte } from '../../../lib/24/outline'

const meta = {
	title: 'Heroicons/Outline',
	component: PhoneXMarkSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<PhoneXMarkSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const PhoneXMark: Story = {}
