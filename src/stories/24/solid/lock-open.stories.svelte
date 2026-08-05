<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import LockOpenSvelte from '../../../lib/24/solid/lock-open.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: LockOpenSvelte,
		args: { class: '' },
	})
</script>

<Story name="LockOpen" />
