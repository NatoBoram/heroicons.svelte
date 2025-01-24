<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import LockOpenSvelte from '../../../lib/16/solid/lock-open.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: LockOpenSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="LockOpen" />
