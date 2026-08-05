<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import LockClosedSvelte from '../../../lib/24/solid/lock-closed.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: LockClosedSvelte,
		args: { class: '' },
	})
</script>

<Story name="LockClosed" />
