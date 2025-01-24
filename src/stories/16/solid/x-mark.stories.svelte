<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import XMarkSvelte from '../../../lib/16/solid/x-mark.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: XMarkSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="XMark" />
