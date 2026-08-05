<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import PhoneXMarkSvelte from '../../../lib/24/outline/phone-x-mark.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: PhoneXMarkSvelte,
		args: { class: '' },
	})
</script>

<Story name="PhoneXMark" />
