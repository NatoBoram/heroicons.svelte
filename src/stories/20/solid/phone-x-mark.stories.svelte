<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import PhoneXMarkSvelte from '../../../lib/20/solid/phone-x-mark.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: PhoneXMarkSvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="PhoneXMark" />
