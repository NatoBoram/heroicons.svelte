<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import XMarkSvelte from '../../../lib/20/solid/x-mark.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: XMarkSvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="XMark" />
